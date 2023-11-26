/**
 * https://stackoverflow.com/questions/3732109/simple-http-server-in-java-using-only-java-se-api
 */

package Java.Sandbox.simple_api;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
//import com.sun.net.HttpServer;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

public class SimpleAPIServer {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/test", new MyHandler());
        server.setExecutor(null); // creates a default executor
        server.start();
    }

    static class MyHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            System.out.println("received request" + t.getRequestBody());
            String response = "Hi! Welcome to the server\n";
            t.sendResponseHeaders(200, response.length());
            OutputStream os = t.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
}
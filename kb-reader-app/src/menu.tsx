
import { useDisclosure, Drawer, DrawerOverlay, DrawerHeader, DrawerContent, DrawerBody, Button } from "@chakra-ui/react";
import React from "react";
export default function Menu () {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    return (<>

    <Button colorScheme='red' onClick={onOpen}>
        Pages
    </Button>
    <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Pages</DrawerHeader>
          <DrawerBody>
            <a href="/javascript">Javascript</a>
            <a href="/react">React</a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>);
}


import { useDisclosure, Link, Menu, MenuItem, Drawer, DrawerOverlay, DrawerHeader, DrawerContent, DrawerBody, Button } from "@chakra-ui/react";
import React from "react";
export default function KBMenu () {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    return (
    <>
    <Button colorScheme='red' onClick={onOpen}>
        Pages
    </Button>
    <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Pages</DrawerHeader>
          <DrawerBody>
            <h1>Interview Questions</h1>
            <Menu>
              <MenuItem>Javascript Interview Questions</MenuItem>
              <Link href="/javascript">Javascript</Link>
              <Link href="/react">React</Link>

            </Menu>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
    );
}

import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { NavigationMenu } from "./navigation-menu";
import { ModeToggle } from "./mode-toggle";

export default function UtilBar() {
    return (
        <NavigationMenu className="flex-row justify-center p-2 m-2">
            <NavigationMenuList className="flex justify-end">
                <NavigationMenuItem>
                    <NavigationMenuLink href="#">
                        Login
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="#">
                        Logout
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <ModeToggle></ModeToggle>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
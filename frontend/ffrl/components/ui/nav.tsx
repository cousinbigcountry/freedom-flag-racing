'use client'

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,  NavigationMenuIndicator } from "@radix-ui/react-navigation-menu";
import NavLogo from "./nav-logo";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

export default function Nav() {

    return (
            <NavigationMenu className="flex-row justify-center p-2 m-2">
          <NavigationMenuList className="flex justify-between">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              < NavigationMenuIndicator></NavigationMenuIndicator>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">
                    Link1
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu2</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">
                   Link2
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavLogo></NavLogo>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu3</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">
                    Link3
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu4</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">
                    Link4
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu5</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                    <li><Popover>
                    <PopoverTrigger>
                        Menu5ins
                    </PopoverTrigger>
                    <PopoverContent side="left">
                        <NavigationMenuLink href="#">
                    Link6
                </NavigationMenuLink>
                    </PopoverContent>
                </Popover>
                </li>

                <li>
                    <Popover>
                    <PopoverTrigger>
                        Menu5ins2
                    </PopoverTrigger>
                    <PopoverContent>
                        <NavigationMenuLink href="#">
                    Link62
                </NavigationMenuLink>
                    </PopoverContent>
                </Popover>
                </li>
                </ul>
                
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
    );

    
}
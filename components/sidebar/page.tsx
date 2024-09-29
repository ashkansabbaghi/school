"use client";

import React from "react";
import { Listbox, ListboxItem, Button } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import { HiHome, HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";

const Page = () => {

    const items = [
        {
            key: "admin",
            label: "ادمین",
            icon: <HiHome className="w-full md:w-fit" />,
            href: "/admin"
        },
        {
            key: "parent",
            label: "والدین",
            icon: <HiHome className="w-full md:w-fit" />,
            href: "/parent"
        },
        {
            key: "student",
            label: "دانش آموز",
            icon: <HiHome className="w-full md:w-fit" />,
            href: "/student"
        },
        {
            key: "teacher",
            label: "معلم",
            icon: <HiHome className="w-full md:w-fit" />,
            href: "/teacher"
        }
    ];

    return (
        <>
            <ListboxWrapper>
                {/* logo top list sidebar menu */}
                <div className="flex items-center justify-center mb-4">
                    <HiHome /> logo
                </div>
                <Listbox items={items} className="p-0">
                    {
                        (item) => (
                            <ListboxItem
                                key={item.key}
                                startContent={item.icon}
                                textValue={item.label}
                                className="flex md:justify-normal justify-center py-3"
                            >
                                <Link className="hidden md:block" href={item.href} >
                                    {item.label}
                                </Link>
                            </ListboxItem>
                        )
                    }
                </Listbox>

                <div className="flex w-full justify-center items-center">
                    <Button color="danger" variant="light" className=" transition-colors p-0 min-w-12">
                        <HiOutlineLogout className="text-2xl"
                        />
                    </Button>

                </div>
            </ListboxWrapper>
        </>
    );
};

export default Page;

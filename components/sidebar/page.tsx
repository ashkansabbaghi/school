"use client";

import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import { HiHome } from "react-icons/hi";
import Link from "next/link";

const Page = () => {

    const items = [
        {
            key: "admin",
            label: "ادمین",
            icon: <HiHome />,
            href: "/admin"
        },
        {
            key: "parent",
            label: "والدین",
            icon: <HiHome />,
            href: "/parent"
        },
        {
            key: "student",
            label: "دانش آموز",
            icon: <HiHome />,
            href: "/student"
        },
        {
            key: "teacher",
            label: "معلم",
            icon: <HiHome />,
            href: "/teacher"
        }
    ];

    return (
        <>
            <ListboxWrapper>
                <Listbox items={items} className="p-0">
                    {
                        (item) => (
                            <ListboxItem
                                key={item.key}
                                startContent={item.icon}
                                textValue={item.label}
                            >
                                <Link href={item.href} >
                                    {item.label}
                                </Link>
                            </ListboxItem>
                        )
                    }
                </Listbox>
            </ListboxWrapper>
        </>
    );
};

export default Page;

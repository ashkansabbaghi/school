import { Input, User , Button } from "@nextui-org/react";
import { HiOutlineSearch, HiOutlineAnnotation } from "react-icons/hi";
import { ThemeSwitcher } from "./ThemeSwitcher/page";


export const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between border border-t-0 border-x-0 p-5">
                {/* search */}
                <Input
                    type="search"
                    placeholder="جستجو کنید"
                    labelPlacement="outside"
                    startContent={
                        <HiOutlineSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    className="max-w-xs"
                />

                {/* user & actions */}
                <div className="flex items-center gap-4">
                    <Button color="default" variant="light" className=" transition-colors p-0 min-w-9">
                        <HiOutlineAnnotation className="text-2xl" />
                    </Button>
                    <ThemeSwitcher />
                    <User
                        dir="ltr"
                        name="اشکان صباغی"
                        description="فرانت اند دولوپر"
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                        }} />
                </div>
            </div>
        </>
    );
}


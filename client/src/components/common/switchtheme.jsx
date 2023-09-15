import { React, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Tooltip, VisuallyHidden, baseStyles, useSwitch } from "@nextui-org/react";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";

const ThemeSwitch = (props) => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, theme } = useTheme();

    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps,
    } = useSwitch(props);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
            localStorage.setItem("theme", "light");
        } else {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    if (!mounted) return null;

    const buttonStyle = {
        backgroundColor: isSelected ? "" : "#CADDE3", // Cambia los colores según tu elección
    };

    return (
        <Tooltip
            classNames={
                {
                    base: "bg-black text-white dark:bg-white dark:text-black"
                }
            }
            showArrow={true}
            placement="left"
            content={
                <> {isSelected ? "Modo claro" : "Modo oscuro"}</>
            }>
            <Component {...getBaseProps()}>
                <VisuallyHidden>
                    <input {...getInputProps()} />
                </VisuallyHidden>
                <div
                    {...getWrapperProps()}
                    className={slots.wrapper({
                        class: [
                            "w-8 h-8",
                            "flex items-center justify-center",
                            "rounded-lg bg-default-100 hover:bg-default-200",
                        ],
                    })}
                    style={buttonStyle} // Aplica el estilo al botón
                    onClick={toggleTheme}>
                    {isSelected ? <IconSunFilled /> : <IconMoonFilled />}
                </div>
            </Component>
        </Tooltip >
    );
};

export default ThemeSwitch;

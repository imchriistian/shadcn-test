// src/hooks/useThemeByRole.ts
import { useEffect } from "react";

export function useThemeByRole(role: "admin" | "teacher" | "student") {
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", role);
    }, [role]);
}

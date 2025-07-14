import { useState } from 'react'
import './App.css'
import ColorPreview from './components/ColorPreview'
import { Button } from './components/ui/button'
import { useThemeByRole } from './hooks/useThemeByRole'
import StackedForm from './StackedForm'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
function App() {
  type Role = "admin" | "teacher";

  const [role, setRole] = useState<Role>("admin");
  useThemeByRole(role);

  const handleChange = () => {
    setRole((prev) =>
      prev === "admin" ? "teacher" : "admin"
    );
  };
  return (
    <>
      <Button onClick={handleChange}>
        Cambiar rol
      </Button>
    Estamos en el rol de {role}
    <ColorPreview></ColorPreview>
      
      {/* Test section for outline buttons */}
      <div className="tw:p-8 tw:space-y-4 tw:border-8 tw:border-info">
        <h2 className="tw:text-xl tw:font-bold">Test Outline Buttons</h2>
        <div className="tw:flex tw:gap-4 tw:flex-wrap">
          <Button variant="outline">Outline Default</Button>
          <Button variant="outline-destructive">Outline Destructive</Button>
          <Button variant="outline-success">Outline Success</Button>
          <Button variant="outline-warning">Outline Warning</Button>
          <Button variant="outline-info">Outline Info</Button>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
      <StackedForm></StackedForm>
    </>
  )
}

export default App

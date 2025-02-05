import { ReactNode } from "react";
import ClientLayout from "./_components/client-layout";
import StyledComponentsRegistry from "./_components/styled-components-registry";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

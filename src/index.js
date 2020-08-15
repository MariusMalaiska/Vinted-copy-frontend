import React from "react";
import ReactDOM from "react-dom";
import "./app/styles/scss/styles.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { AdvertsProvider } from "./providers/advertisments.provider";
import { TokenProvider } from "./providers/token.provider";
import { LoginProvider } from "./providers/login.provider";
import { LogoutProvider } from "./providers/logout.provider";
import { RegisterProvider } from "./providers/register.provider";
import { CreateAdvertProvider } from "./providers/createAdvert.provider";
import { UserNameProvider } from "./providers/userName.provider";
import { DropdownProvider } from "./providers/dropdown.provider";
import { MobileMenuProvider } from "./providers/mobile.menu.provider";
import { ModalProvider } from "./providers/modal.provider";
import { UserAdvertsProvider } from "./providers/useradverts.provider";
import { SingleProvider } from "./providers/single.provider.js";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    {/* <SingleProvider> */}
    <Router>
      <MobileMenuProvider>
        <ModalProvider>
          <DropdownProvider>
            <UserNameProvider>
              <TokenProvider>
                <UserAdvertsProvider>
                  <RegisterProvider>
                    <LogoutProvider>
                      <LoginProvider>
                        <SingleProvider>
                          <AdvertsProvider>
                            <CreateAdvertProvider>
                              <App />
                            </CreateAdvertProvider>
                          </AdvertsProvider>
                        </SingleProvider>
                      </LoginProvider>
                    </LogoutProvider>
                  </RegisterProvider>
                </UserAdvertsProvider>
              </TokenProvider>
            </UserNameProvider>
          </DropdownProvider>
        </ModalProvider>
      </MobileMenuProvider>
    </Router>
    {/* </SingleProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

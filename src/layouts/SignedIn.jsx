import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="desktop/2560x1600_px_landscape_nature-1077192.jpg" />
                <Dropdown pointing="top left" text="Esma">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>

                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}

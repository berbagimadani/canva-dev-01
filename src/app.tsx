import { Box, Button, Column, Columns, MultilineInput, Rows, Text, Title } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import * as React from "react";
import { useState } from "react";
import styles from "styles/components.css";

export const App = () => {

    const [message, setMessage] = React.useState('');

    const [updated, setUpdated] = useState(message);

    const data = [
        {
            "title": "spiderman war, ultra super realistic",
            "images": [
                "https://cdn.leonardo.ai/users/0c8af4c4-1acd-416a-b90a-24c6f3857057/generations/785e965c-6c7f-469c-9848-7fb0054885a6/Leonardo_Vision_XL_spiderman_war_ultra_super_realistic_1.jpg?w=512",
                "https://cdn.leonardo.ai/users/0c8af4c4-1acd-416a-b90a-24c6f3857057/generations/785e965c-6c7f-469c-9848-7fb0054885a6/Leonardo_Vision_XL_spiderman_war_ultra_super_realistic_0.jpg?w=512"
            ]
        },
        {
            "title": "spiderman, ultra realistic",
            "images": [
                "https://cdn.leonardo.ai/users/0c8af4c4-1acd-416a-b90a-24c6f3857057/generations/b7127a41-7132-41e6-b624-49d7cef6abe1/Leonardo_Vision_XL_spiderman_ultra_realistic_1.jpg?w=512",
                "https://cdn.leonardo.ai/users/0c8af4c4-1acd-416a-b90a-24c6f3857057/generations/b7127a41-7132-41e6-b624-49d7cef6abe1/Leonardo_Vision_XL_spiderman_ultra_realistic_0.jpg?w=512"
            ]
        },
        {
            "title": "car",
            "images": [
                "https://cdn.leonardo.ai/users/0c8af4c4-1acd-416a-b90a-24c6f3857057/generations/029481b4-f98e-4104-ba44-1d4d6cb80372/Leonardo_Vision_XL_car_1.jpg?w=512",
                "https://cdn.leonardo.ai/users/0c8af4c4-1acd-416a-b90a-24c6f3857057/generations/029481b4-f98e-4104-ba44-1d4d6cb80372/Leonardo_Vision_XL_car_0.jpg?w=512"
            ]
        },
        {
            "title": "power, vector style",
            "images": [
                "https://cdn.leonardo.ai/users/0c8af4c4-1acd-416a-b90a-24c6f3857057/generations/32453d21-8c08-4415-ae5c-cb50392c98b8/Leonardo_Vision_XL_power_vector_style_1.jpg?w=512",
                "https://cdn.leonardo.ai/users/0c8af4c4-1acd-416a-b90a-24c6f3857057/generations/32453d21-8c08-4415-ae5c-cb50392c98b8/Leonardo_Vision_XL_power_vector_style_0.jpg?w=512"
            ]
        },
        {
            "title": "mouth, vector style",
            "images": [
                "https://cdn.leonardo.ai/users/0c8af4c4-1acd-416a-b90a-24c6f3857057/generations/01d168aa-10d9-4663-8fb9-d8037ff80c0f/Leonardo_Vision_XL_mouth_vector_style_1.jpg?w=512",
                "https://cdn.leonardo.ai/users/0c8af4c4-1acd-416a-b90a-24c6f3857057/generations/01d168aa-10d9-4663-8fb9-d8037ff80c0f/Leonardo_Vision_XL_mouth_vector_style_0.jpg?w=512"
            ]
        },
    ];


    const [datas, setData] = React.useState(data);

    const handleChange = (event) => {
        console.log(event);
        setMessage(event);
    };

    const onClick = () => {

        setUpdated(message);

        // addNativeElement({
        //   type: "TEXT",
        //   children: ["Hello Boss!"],
        // });

        // with channel ( recommended )
        // const bc = new BroadcastChannel("sent_channel");
        // bc.postMessage({ type: 'sent', url: 'https://app.leonardo.ai/ai-generations', message: message });
        // console.log("sent", bc);

        const d2 = [ 
            {
                "title": "mouth, vector style",
                "images": [
                    "https://cdn.leonardo.ai/users/0c8af4c4-1acd-416a-b90a-24c6f3857057/generations/01d168aa-10d9-4663-8fb9-d8037ff80c0f/Leonardo_Vision_XL_mouth_vector_style_1.jpg?w=512",
                    "https://cdn.leonardo.ai/users/0c8af4c4-1acd-416a-b90a-24c6f3857057/generations/01d168aa-10d9-4663-8fb9-d8037ff80c0f/Leonardo_Vision_XL_mouth_vector_style_0.jpg?w=512"
                ]
            },
        ];

        setData(d2);

        // with postMessage
        //window.parent.postMessage({ type: 'sent', url: 'https://app.leonardo.ai/ai-generations', message: message }, '*');
    };

    const fetchData = () => {
    }

    return (
        <div className={styles.scrollContainer}>
            <Rows spacing="2u">
                <Text>
                    To make changes to this app, edit the{" "}
                    <code className={styles.code}>src/app.tsx</code> file, then close and
                    reopen the app in the editor to preview the changes.

                    {message}
                    {updated}
                </Text>

                <MultilineInput
                    autoGrow
                    onChange={handleChange}
                    placeholder="This is an optional placeholder."
                    id="message"
                />

                <Button variant="primary" onClick={onClick} stretch>
                    Generate
                </Button>

                
                <Rows spacing="2u">

                {datas.map((rows, index) => ( 
                    <Rows spacing="1u">
                        <Box>
                            <Text>
                                {rows.title}
                            </Text>
                        </Box>
                        {rows.images.map((row, index) => ( 
                        <Columns spacing="1u">
                            <Column>
                            <img 
                                src={row} 
                            />
                            </Column> 
                        </Columns>
                        ))}
                    </Rows>
                    ))}
                </Rows>
            </Rows>

        </div>
    );
};


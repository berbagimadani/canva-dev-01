import { Button, Rows, Text } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import * as React from "react";
import styles from "styles/components.css";
import { upload } from "@canva/asset";
import { requestExport } from "@canva/design";

export const App = () => {


  const generateRandomId = (prefix: string) =>
    `${prefix}${btoa(Date.now().toString())}${btoa(
      (Math.random() * 1_000_000_000_000).toString()
    )}`.replace(/=+/g, "");


  const onClick = () => {
    
    addNativeElement({
      type: "TEXT",
      children: ["Hello Boss!"],
    });
    
    const bc = new BroadcastChannel("test_channel");
    bc.postMessage({ type: 'sent', message: 'Hello Boss!' });
    console.log("sent", bc);
  };



  const onClick2 = () => {
    // addNativeElement(
    //   {
    //     type: "SHAPE",
    //     paths: [
    //       {
    //         d: "M10 40 h180 v30 h-20 l-10 15 h-40 l-10 -15 h-20z",
    //         fill: {
    //           dropTarget: true,
    //           color: "#ff0099",
    //         },
    //       },
    //       {
    //         d: "M20 45 h30 v20 h-30z",
    //         fill: {
    //           color: "#cccccc",
    //           dropTarget: true,
    //         },
    //       },
    //       {
    //         d: "M60 45 h50 v20 h-50z",
    //         fill: {
    //           color: "#eeeeee",
    //           dropTarget: true,
    //         },
    //       }, 
    //       {
    //         d: "M50 75 a15 15 0 1 0 30 0 a15 15 0 1 0 -30 0",
    //         fill: {
    //           color: "#bbbbbb",
    //           dropTarget: false,
    //         },
    //       }, 
    //     ],
    //     viewBox: {
    //       height: 100,
    //       width: 100,
    //       left: 0,
    //       top: 0,
    //     },
    //   }
    // )
 
    addNativeElement({
      type: "GROUP",
      children: [
        // {
        //   type: "EMBED",
        //   url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        //   width: 50,
        //   height: 50,
        //   top: 0,
        //   left: 0, 
        // },
        {
          type: "SHAPE",
          viewBox: {
            width: 240,
            height: 200,
            left: 0,
            top: 0,
          },
          paths: [
            {
              d: "M150 0 L75 200 L225 200 Z",
              fill: {
                color: "#ff0099",
                dropTarget: true,
              },
            },
          ],
          width: 240,
          height: 200,
          top: 0,
          left: 200,
          rotation: 0 
        },
        {
          type: "SHAPE",
          viewBox: {
            height: 100,
            width: 100,
            left: 0,
            top: 0,
          },
          paths: [
            {
              d: "M 0 0 H 100 V 100 H 0 L 0 0",
              fill: {
                color: "#ff0099",
                dropTarget: true,
              },
            },
          ],
          width: 200,
          height: 200,
          top: 0,
          left: 0,
          rotation: 0,
        },
      ],
    });

  };


  const onClick3 = () => {
    addNativeElement({
      type: "IMAGE",
      dataUrl: createGradient("#ff0099", "#0000ff"),
    });
  };



  function createGradient(color1: string, color2: string): string {
    const canvas = document.createElement("canvas");

    canvas.width = 640;
    canvas.height = 360;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Can't get CanvasRenderingContext2D");
    }

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return canvas.toDataURL();
  }

  //https://konvajs.org/assets/tiger.svg
  async function handleClick() {
    // Start uploading the image
    const image = await upload({
      type: "IMAGE",
      mimeType: "image/svg+xml",
      url: "https://upload.wikimedia.org/wikipedia/commons/5/56/Mapa_SVG_das_zonas_eleitorais_da_cidade_de_S%C3%A3o_Paulo_%282020%29.svg",
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/56/Mapa_SVG_das_zonas_eleitorais_da_cidade_de_S%C3%A3o_Paulo_%282020%29.svg",
      // An alphanumeric string that is unique for each image. If given the same
      // id, the existing image for that id will be used instead.
      id: generateRandomId("i"),
      width: 540,
      height: 720,
    });

    // Add the image to the design, using the thumbnail at first, and replacing
    // with the full image once the upload completes
    await addNativeElement({
      type: "IMAGE",
      ref: image.ref,
    });

    // Wait for the upload to finish so we can report errors if it fails to
    // upload
    await image.whenUploaded();

    // upload is completed
    console.log("Upload complete!");
  }


  async function exportH() {
    const result = await requestExport({
      acceptedFileTypes: ["JPG", "PNG"],
    });

    console.log(result);
  }

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <Text>
          To make changes to this app, edit the{" "}
          <code className={styles.code}>src/app.tsx</code> file, then close and
          reopen the app in the editor to preview the changes.
        </Text>
        <Button variant="primary" onClick={onClick} stretch>
          Do something cool...
        </Button>

        <Button variant="primary" onClick={onClick2} stretch>
          Shape
        </Button>

        <Button variant="primary" onClick={onClick3} stretch>
          Image
        </Button>

        <Button variant="primary" onClick={handleClick} stretch>
          Image upload
        </Button>
        <Button variant="primary" onClick={exportH} stretch>
          Export
        </Button>
      </Rows>
    </div>
  );
};


import "grapesjs/dist/css/grapes.min.css";

const GrapeConfig = () => {
  return {
    container: "#gjs",
    fromElement: true,
    height: "300px",
    width: "auto",
    storageManager: false,
    blockManager: {
      appendTo: "#blocks",
      blocks: [
        {
          id: "section",
          label: "<b>Section</b>",
          attributes: { class: "gjs-block-section" },
          content: `<section>
          <h1>Here goes the title</h1>
          <div>Enter the content here</div>
        </section>`,
        },
        {
          id: "text",
          label: "Text",
          content: '<div data-gjs-type="text">Insert your text here</div>',
        },
        {
          id: "image",
          label: "Image",
          select: true,
          content: { type: "image" },
          activate: true,
        },
      ],
    },
    layerManager: {
      appendTo: ".layers-container",
    },
    deviceManager: {
      devices: [
        {
          name: "Desktop",
          width: "",
        },
        {
          name: "Mobile",
          width: "320px",
          widthMedia: "480px",
        },
        {
          name: "Tablet",
          width: "768px",
          widthMedia: "810px",
        },
      ],
    },
    panels: {
      defaults: [
        {
          id: "panel-switcher",
          el: ".panel__switcher",
          buttons: [
            {
              id: "show-layers",
              active: true,
              label: "Layers",
              command: "show-layers",
              togglable: false,
            },
            {
              id: "show-style",
              active: true,
              label: "Styles",
              command: "show-styles",
              togglable: false,
            },
          ],
        },
        {
          id: "panel-devices",
          el: ".panel__devices",
          buttons: [
            {
              id: "device-desktop",
              label: "D",
              command: "set-device-desktop",
              active: true,
              togglable: false,
            },
            {
              id: "device-mobile",
              label: "M",
              command: "set-device-mobile",
              togglable: false,
            },
            {
              id: "device-tablet",
              label: "T",
              command: "set-device-tablet",
              togglable: false,
            },
          ],
        },
      ],
    },
    traitManager: {
      appendTo: ".traits-container",
    },
    selectorManager: {
      appendTo: ".styles-container",
    },
    styleManager: {
      appendTo: ".styles-container",
      sectors: [
        {
          name: "Dimension",
          open: false,
          properties: [
            {
              type: "integer",
              name: "The width",
              property: "width",
              units: ["px", "%", "em", "rem"],
              defaults: "auto",
              min: 0,
            },
          ],
        },
        {
          name: "Extra",
          open: false,
          buildProps: [
            "background-color",
            "box-shadow",
            "custom-prop",
            "transform",
          ],
          properties: [
            {
              id: "custom-prop",
              name: "Custom Label",
              property: "font-size",
              type: "select",
              defaults: "32px",
              options: [
                { value: "12px", name: "Tiny" },
                { value: "18px", name: "Medium" },
                { value: "32px", name: "Big" },
              ],
              onchange: (event) => {
                console.log(event, "ewfefewrfgewf");
              },
            },
          ],
        },
      ],
    },
  };
};

export default GrapeConfig;

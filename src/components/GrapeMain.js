import React, { useEffect } from "react";
import Grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

import GrapeConfig from "./GrapeConfig";

import "./Grape.css";

const GrapeMain = () => {
  useEffect(() => {
    loadGrapesJs();
  }, []);

  const loadComponents = (editor) => {
    editor.BlockManager.add("my-block-id", {
      content: {
        tagName: "div",
        draggable: false,
        attributes: { "some-attribute": "some-value" },
        components: [
          {
            tagName: "span",
            content: "<b>Some static content</b>",
          },
          {
            tagName: "div",
            components: "<span>This is a project</span>",
          },
        ],
      },
    });
    editor.Panels.addPanel({
      id: "panel-top",
      el: ".panel__top",
    });
    editor.Panels.addPanel({
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "visibility",
          active: true,
          className: "btn-toggle-borders",
          label: "<u>B</u>",
          command: "sw-visibility",
        },
        {
          id: "export",
          className: "btn-open-export",
          label: "Exp",
          command: "export-template",
          context: "export-template",
        },
        {
          id: "show-json",
          className: "btn-show-json",
          label: "JSON",
          context: "show-json",
          command(editor) {
            editor.Modal.setTitle("Components JSON")
              .setContent(
                `<textarea style="width:100%; height: 250px;">
                ${JSON.stringify(editor.getComponents())}
              </textarea>`
              )
              .open();
          },
        },
      ],
    });
    editor.Commands.add("show-traits", {
      getTraitsEl(editor) {
        const row = editor.getContainer().closest(".editor-row");
        return row.querySelector(".traits-container");
      },
      run(editor, sender) {
        this.getTraitsEl(editor).style.display = "";
      },
      stop(editor, sender) {
        this.getTraitsEl(editor).style.display = "none";
      },
    });
    editor.Commands.add("set-device-desktop", {
      run: (editor) => editor.setDevice("Desktop"),
    });
    editor.Commands.add("set-device-mobile", {
      run: (editor) => editor.setDevice("Mobile"),
    });
    editor.Commands.add("set-device-tablet", {
      run: (editor) => editor.setDevice("Tablet"),
    });
  };

  const loadGrapesJs = async () => {
    const editor = await Grapesjs.init(GrapeConfig());
    window.editor = editor;
    editor.on("style:property:update", (a) => {
      console.log(a, "dvdsvdsvsvs");
    });
    loadComponents(editor);
  };
  return (
    <>
      <div class="panel__top">
        <div class="panel__basic-actions"></div>
        <div class="panel__devices"></div>
        <div class="panel__switcher"></div>
      </div>
      <div class="editor-row">
        <div class="editor-canvas">
          <div id="gjs">
            <h1>Hackaholics :)</h1>
          </div>
        </div>
        <div class="panel__right">
          <div class="traits-container"></div>
          <div class="layers-container"></div>
          <div class="styles-container"></div>
        </div>
      </div>

      <div id="blocks"></div>
    </>
  );
};

export default GrapeMain;

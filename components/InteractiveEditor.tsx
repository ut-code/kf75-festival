import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackConsumer,
} from "@codesandbox/sandpack-react";
import { Tabs, TabList, Tab } from "react-tabs";

export type InteractiveEditorProps = {
  html?: string;
  javascript?: string;
};

const filePaths = ["/index.html", "/index.js"];

export default function InteractiveEditor(props: InteractiveEditorProps) {
  return (
    <SandpackProvider
      files={{
        "/index.html": { active: !props.javascript, code: props.html ?? "" },
        "/index.js": {
          active: !!props.javascript,
          code: props.javascript ?? "",
        },
      }}
    >
      <SandpackConsumer>
        {({ activeFile, setActiveFile }) => (
          <SandpackLayout>
            <div
              style={{
                flex: "1 1 0px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Tabs
                selectedIndex={filePaths.indexOf(activeFile)}
                onSelect={(index) => setActiveFile(filePaths[index])}
                selectedTabClassName="tabs__item--active"
                style={{ backgroundColor: "var(--sp-colors-surface1)" }}
              >
                <TabList className="tabs">
                  <Tab
                    className="tabs__item"
                    style={{
                      display: props.html ? "block" : "none",
                      margin: 0,
                    }}
                  >
                    HTML
                  </Tab>
                  <Tab
                    className="tabs__item"
                    style={{
                      display: props.javascript ? "block" : "none",
                      margin: 0,
                    }}
                  >
                    JavaScript
                  </Tab>
                </TabList>
              </Tabs>
              <SandpackCodeEditor showTabs={false} style={{ flex: "1 1 0" }} />
              <div
                style={{
                  backgroundColor: "var(--sp-colors-surface1)",
                  color: "var(--ifm-font-color-secondary)",
                  padding: "calc(var(--ifm-global-spacing) * 0.5)",
                }}
              >
                プログラムを編集すると、自動的にプレビューが更新されます。
              </div>
            </div>
            <SandpackPreview
              showOpenInCodeSandbox={false}
              showRefreshButton={false}
              style={{ height: "unset" }}
              showNavigator={true}
            />
          </SandpackLayout>
        )}
      </SandpackConsumer>
    </SandpackProvider>
  );
}

import React, { useMemo } from "react";
import clsx from "clsx";
import CodeBlock from "@theme/CodeBlock";
import { MethodParam } from "@site/src/components/ParserOpenRPC/interfaces";
import styles from "./styles.module.css";
import global from "../global.module.css";


interface RequestBoxProps {
  isMetamaskInstalled: boolean;
  method: string;
  params: MethodParam[];
  response?: any;
}

export default function RequestBox({ isMetamaskInstalled, method, params, response }: RequestBoxProps) {
  const exampleRequest = useMemo(() => {
    return `await window.ethereum.request({\n "method": "${method}",\n "params": [${params}],\n});`;
  }, [method, params]);

  const exampleResponse = useMemo(() => {
    const ex = {
      "jsonrpc": "2.0",
      "id": 1,
      "result": `${response}`,
    };
    return JSON.stringify(ex, null, 2);
  }, [response]);

  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.cardHeader}>
          <strong>Request</strong>
        </div>
        <div>
          <CodeBlock language="javascript" className="margin-bottom--none">
            {exampleRequest}
          </CodeBlock>
        </div>
        <div className={styles.cardFooter}>
          <button
            className={clsx(global.linkBtn, "margin-right--md")}
            disabled={!isMetamaskInstalled}
          >
            Customize request
          </button>
          <button className={global.primaryBtn} disabled={!isMetamaskInstalled}>
            Run request
          </button>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.cardHeader}>
          <strong>Response</strong>
        </div>
        <div>
          <CodeBlock language="javascript" className="margin-bottom--none">
            {exampleResponse}
          </CodeBlock>
        </div>
      </div>
    </>
  );
}
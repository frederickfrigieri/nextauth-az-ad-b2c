"use client";
import { useState } from "react";

export default function WhoAmIButton({ whoAmIAction }: { whoAmIAction: () => Promise<string> }) {
    const [name, setName] = useState<string>();
    return (
        <div>
            <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onClick={async () => setName(await whoAmIAction())}>Who Am I?</button>
            {name && <div>You are {name}</div>}
        </div>
    );
}


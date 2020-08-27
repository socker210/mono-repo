import React from "react";
import { sotriesOf, storiesOf } from "@storybook/react";

import Button from ".";

storiesOf("Button", module).add("default", () => <Button>{"Button"}</Button>);

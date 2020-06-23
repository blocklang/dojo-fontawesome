const { describe, it } = intern.getInterface("bdd");

import assertionTemplate from "@dojo/framework/testing/harness/assertionTemplate";
import harness from "@dojo/framework/testing/harness/harness";
import { w, v } from "@dojo/framework/core/vdom";

import FontAwesomeIcon from "../../src/FontAwesomeIcon";

describe("FontAwesomeIcon", () => {
	const baseAssertion = assertionTemplate(() => v("div", {}, ["Widget Content"]));

	it("renders", () => {
		const h = harness(() => w(FontAwesomeIcon, { icon: "plus" }));

		h.expect(baseAssertion);
	});
});

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return c(58131);
        },
      ]);
    },
    58131: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __N_SSP: function () {
            return P;
          },
          default: function () {
            return Q;
          },
        });
      var d = c(85893),
        e = c(5152),
        f = c.n(e),
        g = c(9008),
        h = c.n(g),
        i = c(41664),
        j = c.n(i),
        k = c(73917),
        l = c.n(k),
        m = c(25186),
//         n = c(60487),
//         o = c(39605),
//         p = c(67294),
//         q = c(28396),
//         r = {
//           initialIndex: 0,
//           dragThreshold: 10,
//           draggable: !0,
//           pageDots: !1,
//           prevNextButtons: !1,
//           wrapAround: !0,
//           lazyLoad: 2,
//           imagesLoaded: !0,
//         },
//         s = [
//           {
//             title: "Ethereum Aligned",
//             text: "Arbitrum should be fundamentally aligned with the Ethereum ecosystem and a constructive member of the Ethereum community.",
//           },
//           {
//             title: "Sustainable",
//             text: "Decisions about technology, fee economics, and resource allocation should optimize for the long-term health of the ecosystem.",
//           },
//           {
//             title: "Technically Inclusive",
//             text: "Ordinary people with ordinary computers should be able to fully participate in the Arbitrum protocol.",
//           },
//           {
//             title: "Socially Inclusive",
//             text: "The community should be open and welcoming to all people who wish to participate constructively.",
//           },
//           {
//             title: "Neutral and Open",
//             text: "Arbitrum governance should not pick winners or losers, but should foster open innovation, interoperation, user choice, and healthy competition on Arbitrum chains.",
//           },
//         ];
//       function t() {
//         var a = (0, p.useRef)(null),
//           b = function () {
//             var b;
//             null === (b = a.current) || void 0 === b || b.previous();
//           },
//           c = function () {
//             var b;
//             null === (b = a.current) || void 0 === b || b.next();
//           };
//         return (0, d.jsx)(l(), {
//           flickityRef: function (b) {
//             a.current = b;
//           },
//           className: "[ c-Carousel ] [ flickity-fade ]",
//           elementType: "div",
//           options: r,
//           disableImagesLoaded: !1,
//           children: s.map(function (a, e) {
//             return (0,
//             d.jsxs)("div", { className: "[ c-Carousel__slide ] [ flickity-slide ]", children: [(0, d.jsx)("div", { className: "c-Carousel__slide-graphic", children: (0, d.jsx)(o.Z, { imageObj: { sizes: ["/illustration_3-".concat(e + 1, ".webp")], alt: "Illustration 3", width: 830, height: 830 } }) }), (0, d.jsxs)("div", { className: "c-Carousel__slide-content", children: [(0, d.jsxs)("ul", { className: "c-Carousel__slide-content-labels", children: [(0, d.jsxs)("li", { children: [e + 1, "/5"] }), (0, d.jsx)("li", { children: a.title })] }), (0, d.jsx)("p", { children: a.text }), (0, d.jsxs)("div", { className: "c-Carousel__slide-content-actions", children: [(0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)("button", { className: "c-Carousel__arrow", onClick: b, "aria-label": "prev" }), (0, d.jsx)("button", { className: "c-Carousel__arrow", onClick: c, "aria-label": "next" })] }), (0, d.jsx)(q.Z, {})] })] })] }, e);
//           }),
//         });
//       }
//       var u = c(82508),
//         v = [
//           {
//             heading: "Chain Ownership",
//             lede: "Chain ownership of both Arbitrum One and Arbitrum Nova is under the control of the Arbitrum Governance system.",
//             text: "Comprised of both the Arbitrum DAO and the Security Council, the governance system currently has the ability to alter itself. Arbitrum One has now reached Stage 1 decentralization.",
//           },
//           {
//             heading: "Validator Ownership",
//             lede: "Execution on Arbitrum is validated to Ethereum Mainnet by a set of validators.",
//             text: (0, d.jsxs)(d.Fragment, {
//               children: [
//                 "This set of validators has been expanded to include",
//                 " ",
//                 (0, d.jsx)(u.d, {
//                   className: "underline",
//                   href: "https://offchain.medium.com/arbitrum-decentralization-update-39f093768c42",
//                   children: "organizations across the ecosystem",
//                 }),
//                 ". All validators would have to be malicious for an incorrect transaction to be accepted.",
//               ],
//             }),
//           },
//           {
//             heading: "Sequencer Ownership",
//             lede: "The Sequencers for both Arbitrum One and Arbitrum Nova are currently maintained by the Arbitrum Foundation.",
//             text: "Governance currently has the power to select new Sequencers.",
//           },
//           {
//             heading: "Data Availability Committee (DAC) Ownership",
//             lede: (0, d.jsxs)(d.Fragment, {
//               children: [
//                 "Arbitrum Nova has a 7-party DAC, whose members can be seen",
//                 " ",
//                 (0, d.jsx)(u.d, {
//                   href: "https://developer.arbitrum.io/public-chains#arbitrum-chains-summary",
//                   className: "underline",
//                   children: "here",
//                 }),
//                 ".",
//               ],
//             }),
//             text: "The Arbitrum governance system currently has the power to change the DAC, by adding or removing members, or modifying the DAC’s role in the system.",
//           },
//         ];
//       function w() {
//         var a = (0, p.useState)(0),
//           b = a[0],
//           c = a[1],
//           e = (0, p.useCallback)(
//             function (a) {
//               a !== b && c(a);
//             },
//             [b]
//           ),
//           f = (0, p.useMemo)(
//             function () {
//               return v.map(function (a, c) {
//                 return (0, d.jsxs)(
//                   "div",
//                   {
//                     onClick: function () {
//                       return e(c);
//                     },
//                     className: "c-HorizontalAccordion__tab ".concat(
//                       b === c ? "is-active" : ""
//                     ),
//                     children: [
//                       (0, d.jsx)("div", {
//                         className:
//                           "c-HorizontalAccordion__tab-label only-desktop",
//                         children: (0, d.jsx)("span", { children: c + 1 }),
//                       }),
//                       (0, d.jsxs)("div", {
//                         className: "c-HorizontalAccordion__content",
//                         children: [
//                           (0, d.jsx)("h4", {
//                             className: "c-HorizontalAccordion__heading",
//                             children: a.heading,
//                           }),
//                           (0, d.jsx)("p", {
//                             className: "lede",
//                             children: a.lede,
//                           }),
//                           (0, d.jsx)("p", { children: a.text }),
//                         ],
//                       }),
//                     ],
//                   },
//                   c
//                 );
//               });
//             },
//             [b, e]
//           );
//         return (0, d.jsx)("div", {
//           className: "c-HorizontalAccordion",
//           children: f,
//         });
//       }
//       var x = c(2292),
//         y = function (a) {
//           a.forEach(function (a) {
//             a.isIntersecting
//               ? a.target.classList.add("is-visible")
//               : a.target.classList.remove("is-visible");
//           });
//         };
//       function z() {
//         var a = (0, p.useRef)(null);
//         return (
//           (0, p.useEffect)(
//             function () {
//               if (
//                 null === (b = a.current) || void 0 === b ? void 0 : b.children
//               ) {
//                 var b,
//                   c = new IntersectionObserver(y, {
//                     rootMargin: "0% 0% -30% 0%",
//                     threshold: 1,
//                   });
//                 return (
//                   Array.from(a.current.children).forEach(function (a) {
//                     c.observe(a);
//                   }),
//                   function () {
//                     c.disconnect();
//                   }
//                 );
//               }
//             },
//             [a]
//           ),
//           (0, d.jsx)("div", {
//             children: (0, d.jsxs)("p", {
//               className: "c-AnimateTextOnScroll",
//               ref: a,
//               children: [
//                 (0, d.jsx)("span", { children: "This" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "marks" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "the" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "beginning" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "of" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "decentralized" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "governance" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "for" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "the" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "Arbitrum" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "protocol." }),
//                 " ",
//                 (0, d.jsx)("span", { children: "Users" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "across" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "the" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "ecosystem" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "will" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "be" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "given" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "voting" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "power." }),
//                 " ",
//                 (0, d.jsx)("span", { children: "11.62%" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "of" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "tokens" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "will" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "be" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "initially" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "distributed" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "to" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "users" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "and" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "1.13%" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "will" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "be" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "distributed" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "to" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "DAOs" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "in" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "the" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "Arbitrum" }),
//                 " ",
//                 (0, d.jsx)("span", { children: "ecosystem." }),
//               ],
//             }),
//           })
//         );
//       }
//       var A = c(85518),
//         B = c(8151),
//         C = {
//           initialIndex: 0,
//           pageDots: !0,
//           prevNextButtons: !1,
//           wrapAround: !1,
//           draggable: !0,
//           contain: !0,
//           groupCells: !0,
//           cellAlign: "left",
//           adaptiveHeight: !1,
//         },
//         D = { rootMargin: "-60px", threshold: 0 };
//       function E(a) {
//         var b = a.isClaimingLive,
//           c = (0, p.useRef)(null),
//           e = function (a) {
//             a.forEach(function (a) {
//               a.isIntersecting && a.target.classList.add("is-visible");
//             });
//           };
//         return (
//           (0, p.useEffect)(
//             function () {
//               c.current &&
//                 !A.tq &&
//                 new IntersectionObserver(e, D).observe(c.current);
//             },
//             [c]
//           ),
//           (0, d.jsx)("div", {
//             ref: c,
//             children: (0, d.jsxs)(l(), {
//               elementType: "div",
//               options: C,
//               children: [
//                 (0, d.jsx)("div", {
//                   className: "carousel-cell",
//                   children: (0, d.jsxs)("div", {
//                     className: "c-FeatureCard",
//                     children: [
//                       (0, d.jsxs)("div", {
//                         children: [
//                           (0, d.jsx)("div", {
//                             className: "c-FeatureCard__icon",
//                             children: (0, d.jsx)("span", {
//                               className: "[ c-Label c-Label--dark ]",
//                               children: "Delegates",
//                             }),
//                           }),
//                           (0, d.jsx)("h3", {
//                             className: "c-FeatureCard__heading",
//                             children:
//                               "Delegates are users who are committed to being consistently involved in governance",
//                           }),
//                           (0, d.jsx)("p", {
//                             children:
//                               "Token holders will be able to select a preferred delegate, including themselves, and can re-delegate at any time.",
//                           }),
//                         ],
//                       }),
//                       b
//                         ? (0, d.jsx)(u.d, {
//                             className: "[ c-Button c-Button--blue ]",
//                             href: "https://www.tally.xyz/gov/arbitrum",
//                             children: "Become a delegate",
//                           })
//                         : (0, d.jsx)(u.d, {
//                             className: "[ c-Button c-Button--blue ]",
//                             href: "https://forum.arbitrum.foundation/t/delegate-application-template/31",
//                             children: "Apply to be a delegate",
//                           }),
//                     ],
//                   }),
//                 }),
//                 (0, d.jsx)("div", {
//                   className: "carousel-cell",
//                   children: (0, d.jsxs)("div", {
//                     className: "c-FeatureCard",
//                     children: [
//                       (0, d.jsxs)("div", {
//                         children: [
//                           (0, d.jsx)("div", {
//                             className: "c-FeatureCard__icon",
//                             children: (0, d.jsx)("span", {
//                               className: "[ c-Label c-Label--dark ]",
//                               children: "Security Council",
//                             }),
//                           }),
//                           (0, d.jsx)("h3", {
//                             className: "c-FeatureCard__heading",
//                             children:
//                               "The Security Council can approve protocol upgrades when a fast response is needed",
//                           }),
//                           (0, d.jsx)("p", {
//                             children:
//                               "The Security Council is composed of 12 highly reputable members of the community. Emergency upgrades require a 9-of-12 multisig.",
//                           }),
//                         ],
//                       }),
//                       (0, d.jsx)(u.d, {
//                         href: "".concat(B.l9, "/concepts/security-council"),
//                         children: (0, d.jsx)("button", {
//                           className: "[ c-Button c-Button--blue ]",
//                           children: "Read more",
//                         }),
//                       }),
//                     ],
//                   }),
//                 }),
//                 (0, d.jsx)("div", {
//                   className: "carousel-cell",
//                   children: (0, d.jsxs)("div", {
//                     className: "c-FeatureCard",
//                     children: [
//                       (0, d.jsxs)("div", {
//                         children: [
//                           (0, d.jsx)("div", {
//                             className: "c-FeatureCard__icon",
//                             children: (0, d.jsx)("span", {
//                               className: "[ c-Label c-Label--dark ]",
//                               children: "Arbitrum DAO",
//                             }),
//                           }),
//                           (0, d.jsx)("h3", {
//                             className: "c-FeatureCard__heading",
//                             children: "The DAO governs Arbitrum One and Nova",
//                           }),
//                           (0, d.jsx)("p", {
//                             children:
//                               "The Arbitrum DAO includes token holders and their delegates. It has the power to upgrade the protocol and constitution, as well as elect the Security Council. Proposals for upgrades and amendments are submitted and voted on by the DAO.",
//                           }),
//                         ],
//                       }),
//                       (0, d.jsx)(u.d, {
//                         href: "".concat(B.l9, "/dao-constitution"),
//                         children: (0, d.jsx)("button", {
//                           className: "[ c-Button c-Button--blue ]",
//                           children: "Read the Constitution",
//                         }),
//                       }),
//                     ],
//                   }),
//                 }),
//               ],
//             }),
//           })
//         );
//       }
//       var F = c(33680),
//         G = c(62615),
//         H = f()(
//           function () {
//             return Promise.all([c.e(3025), c.e(6428)]).then(c.bind(c, 66428));
//           },
//           {
//             loadableGenerated: {
//               webpack: function () {
//                 return [66428];
//               },
//             },
//             ssr: !1,
//             loading: function () {
//               return (0, d.jsxs)("button", {
//                 className: "c-ConnectButton",
//                 children: [(0, d.jsx)("span", {}), "Connect Wallet"],
//               });
//             },
//           }
//         ),
//         I = {
//           initialIndex: 0,
//           pageDots: !0,
//           prevNextButtons: !1,
//           wrapAround: !1,
//           draggable: !0,
//           contain: !0,
//           groupCells: !0,
//           cellAlign: "left",
//           adaptiveHeight: !1,
//         },
//         J = {
//           sizes: ["/illustration_1.webp"],
//           alt: "Illustration 1",
//           width: 1200,
//           height: 800,
//         },
//         K = {
//           sizes: ["/illustration_9.webp"],
//           alt: "Illustration 9",
//           width: 500,
//           height: 500,
//         },
//         L = {
//           sizes: ["/illustration_10.webp"],
//           alt: "Illustration 10",
//           width: 500,
//           height: 500,
//         },
//         M = {
//           sizes: ["/illustration_11.webp"],
//           alt: "Illustration 11",
//           width: 500,
//           height: 500,
//         },
//         N = {
//           sizes: ["/illustration_12.webp"],
//           alt: "Illustration 12",
//           width: 320,
//           height: 320,
//         },
//         O = [
//           {
//             image: { sizes: ["/planet_3.svg"], alt: "#" },
//             transformOffset: 0.25,
//             width: "clamp(120px, 25vw, 280px)",
//             height: "clamp(120px, 25vw, 280px)",
//             inset: "-2vh 0 0 20vw",
//             setBack: !0,
//           },
//           {
//             image: { sizes: ["/planet_6.svg"], alt: "#" },
//             transformOffset: 2.2,
//             width: "clamp(700px, 150vw, 2000px)",
//             height: "clamp(700px, 150vw, 2000px)",
//             inset: "-15vh 0 0 70vw",
//             setBack: !0,
//           },
//           {
//             image: { sizes: ["/planet_3.svg"], alt: "#" },
//             transformOffset: 1.1,
//             width: "clamp(500px, 90vw, 2000px)",
//             height: "clamp(500px, 90vw, 2000px)",
//             inset: "110vh 0 0 30vw",
//             setBack: !0,
//           },
//           {
//             image: { sizes: ["/illustration_5.webp"], alt: "#" },
//             transformOffset: 0.6,
//             width: "clamp(120px, 45vw, 460px)",
//             height: "clamp(120px, 45vw, 460px)",
//             inset: "10vh 0 0 70vw",
//           },
//           {
//             image: { sizes: ["/illustration_6.webp"], alt: "#" },
//             transformOffset: 2,
//             width: "clamp(230px, 30vw, 460px)",
//             height: "clamp(230px, 30vw, 460px)",
//             inset: "62vh 0 0 15vw",
//           },
//           {
//             image: { sizes: ["/illustration_7.webp"], alt: "#" },
//             transformOffset: 0.75,
//             width: "clamp(240px, 50vw, 480px)",
//             height: "clamp(240px, 50vw, 480px)",
//             inset: "90vh 0 0 65vw",
//           },
//           {
//             image: { sizes: ["/illustration_8.webp"], alt: "#" },
//             transformOffset: 0.9,
//             width: "clamp(225px, 40vw, 450px)",
//             height: "clamp(225px, 40vw, 450px)",
//             inset: "120vh 0 0 30vw",
//           },
//         ],
//         P = !0;
//       function Q(a) {
//         var b = a.isClaimingLive;
//         return (0, d.jsxs)(d.Fragment, {
//           children: [
//             (0, d.jsxs)(h(), {
//               children: [
//                 (0, d.jsx)("title", {
//                   children:
//                     "Arbitrum — Check your airdrop eligibility to govern Arbitrum",
//                 }),
//                 (0, d.jsx)("meta", {
//                   name: "description",
//                   content:
//                     "Discover if you are eligible to receive the Arbitrum airdrop, claim your tokens, and delegate your voting power",
//                 }),
//                 (0, d.jsx)("meta", {
//                   name: "viewport",
//                   content:
//                     "width=device-width, initial-scale=1, minimum-scale=1",
//                 }),
//               ],
//             }),
//             (0, d.jsxs)("main", {
//               className: "home",
//               children: [
//                 (0, d.jsx)(m.h4, {}),
//                 (0, d.jsx)("section", {
//                   className: "[ l-Section l-Section--hero ]",
//                   children: (0, d.jsx)("div", {
//                     className: "l-Hero",
//                     children: (0, d.jsxs)("div", {
//                       className: "l-Hero__cta",
//                       children: [
//                         (0, d.jsx)("h1", {
//                           className: "l-Hero__heading",
//                           children: "Welcome to the future of Ethereum",
//                         }),
//                         (0, d.jsx)("h2", {
//                           className: "l-Hero__sub-heading",
//                           children: "Check your eligibility to claim $ARB",
//                         }),
//                         (0, d.jsx)(G.Z, { isClaimingLive: b, size: "compact" }),
//                         (0, d.jsx)(H, {}),
//                       ],
//                     }),
//                   }),
//                 }),
//                 (0, d.jsxs)("section", {
//                   className:
//                     "[ l-Section l-Section--adjacent-image-text-card ] [ has-sticky ]",
//                   children: [
//                     (0, d.jsxs)("div", {
//                       className: "l-Section__card",
//                       children: [
//                         (0, d.jsx)("h3", {
//                           className: "l-Section__heading",
//                           children: "We must decentralize",
//                         }),
//                         (0, d.jsxs)("p", {
//                           className: "l-Section__lede",
//                           children: [
//                             "The Arbitrum DAO is a massive leap forward, making Arbitrum the first EVM rollup tech to reach",
//                             " ",
//                             (0, d.jsx)(u.d, {
//                               className: "text-blue hover:underline",
//                               href: "https://ethereum-magicians.org/t/proposed-milestones-for-rollups-taking-off-training-wheels/11571",
//                               children: "Stage 1",
//                             }),
//                             " ",
//                             "decentralization.",
//                           ],
//                         }),
//                         (0, d.jsx)(u.d, {
//                           href: "https://arbitrumfoundation.medium.com/arbitrum-the-next-phase-of-decentralization-e7f8b37b5226",
//                           className: "[ c-Button c-Button--blue ]",
//                           children: "Read the announcement",
//                         }),
//                       ],
//                     }),
//                     (0, d.jsx)("div", {
//                       children: (0, d.jsx)(o.Z, { imageObj: J }),
//                     }),
//                   ],
//                 }),
//                 (0, d.jsx)("section", {
//                   className: "[ l-Section ] px-[60px]",
//                   children: (0, d.jsxs)("div", {
//                     className:
//                       "l-Section__card !bg-[rgba(38,40,42,0.8)] md:!backdrop-blur-[3px] w-full max-w-[1150px] m-auto flex-col-reverse md:flex-row flex items-center justify-center",
//                     children: [
//                       (0, d.jsxs)("div", {
//                         className: "mt-6 md:mt-0",
//                         children: [
//                           (0, d.jsx)("span", {
//                             className: "[ c-Label c-Label--dark ]",
//                             children: "Arbitrum Orbit",
//                           }),
//                           (0, d.jsx)("h3", {
//                             className:
//                               "c-FeatureCard__heading mt-6 !mb-6 max-w-[440px]",
//                             children:
//                               "Starting today, anyone can easily launch a new Arbitrum chain as a Layer 3 in the Arbitrum ecosystem.",
//                           }),
//                           (0, d.jsx)(j(), {
//                             href: "/orbit",
//                             legacyBehavior: !0,
//                             children: (0, d.jsx)("a", {
//                               className: "[ c-Button c-Button--blue ]",
//                               children: "Learn More",
//                             }),
//                           }),
//                         ],
//                       }),
//                       (0, d.jsx)(o.Z, { imageObj: N, layout: "fixed" }),
//                     ],
//                   }),
//                 }),
//                 (0, d.jsx)("section", { className: "l-Cityscape" }),
//                 (0, d.jsxs)("section", {
//                   className: "[ l-Section l-Section--centered ]",
//                   children: [
//                     (0, d.jsxs)("div", {
//                       className: "l-Section--centered__intro",
//                       children: [
//                         (0, d.jsx)("h2", {
//                           className: "l-Section__heading",
//                           children: "Who is involved?",
//                         }),
//                         (0, d.jsx)("p", {
//                           className: "l-Section__lede text-align-left px-5",
//                           children:
//                             "Individuals across the ecosystem can participate in governance. Token holders control protocol upgrades, funds allocation, and election of a Security Council who can perform emergency upgrades. Your voting power is derived directly from the number of tokens delegated to you.",
//                         }),
//                         (0, d.jsx)(q.Z, {}),
//                       ],
//                     }),
//                     (0, d.jsx)("div", {
//                       className:
//                         "[ l-Section__3up-cards l-Section--collapse-to-carousel ]",
//                       children: (0, d.jsx)("div", {
//                         className: "[ l-CTABlocks l-CTABlocks--3up ]",
//                         children: (0, d.jsx)(E, { isClaimingLive: b }),
//                       }),
//                     }),
//                   ],
//                 }),
//                 (0, d.jsxs)("section", {
//                   className: "[ l-Section l-Section--animate-text-on-scroll ]",
//                   children: [
//                     (0, d.jsx)("span", {
//                       className: "c-Label",
//                       children: "What does this mean for users?",
//                     }),
//                     (0, d.jsx)(z, {}),
//                   ],
//                 }),
//                 (0, d.jsx)("hr", {}),
//                 (0, d.jsx)("section", {
//                   className: "[ l-Section l-Section--single ]",
//                   children: (0, d.jsxs)("div", {
//                     className: "l-Section--single__main",
//                     children: [
//                       (0, d.jsx)("h2", {
//                         className: "l-Section__heading",
//                         children: "Distribution",
//                       }),
//                       (0, d.jsx)("div", {
//                         className: "l-Section--single__image",
//                         children: (0, d.jsx)(F.Z, {}),
//                       }),
//                     ],
//                   }),
//                 }),
//                 (0, d.jsx)("section", {
//                   className: "[ l-Section l-Section--horizontal-accordion ]",
//                   children: (0, d.jsxs)("div", {
//                     children: [
//                       (0, d.jsxs)("div", {
//                         className: "l-Section__heading-cta",
//                         children: [
//                           (0, d.jsx)("h3", {
//                             className: "l-Section__heading",
//                             children: "The State of Decentralization",
//                           }),
//                           (0, d.jsx)(q.Z, {
//                             path: "/state-of-progressive-decentralization",
//                           }),
//                         ],
//                       }),
//                       (0, d.jsx)(w, {}),
//                     ],
//                   }),
//                 }),
//                 (0, d.jsxs)("section", {
//                   className: "[ l-Section l-Section--carousel ]",
//                   children: [
//                     (0, d.jsx)("div", {
//                       className: "l-Section--cta-blocks__intro",
//                       children: (0, d.jsx)("h2", {
//                         className: "l-Section__heading",
//                         children: "Community Values",
//                       }),
//                     }),
//                     (0, d.jsx)(t, {}),
//                   ],
//                 }),
//                 (0, d.jsx)("hr", {}),
//                 (0, d.jsxs)("section", {
//                   className:
//                     "[ l-Section l-Section--cta-blocks l-Section--collapse-to-carousel ]",
//                   children: [
//                     (0, d.jsx)("div", {
//                       className: "l-Section--cta-blocks__intro",
//                       children: (0, d.jsx)("h2", {
//                         className: "l-Section__heading",
//                         children: "Step Forward",
//                       }),
//                     }),
//                     (0, d.jsx)("div", {
//                       className: "[ l-CTABlocks l-CTABlocks--3up ]",
//                       children: (0, d.jsxs)(l(), {
//                         elementType: "div",
//                         options: I,
//                         children: [
//                           (0, d.jsx)("div", {
//                             className: "carousel-cell",
//                             children: (0, d.jsxs)(u.d, {
//                               href: "https://forum.arbitrum.foundation",
//                               className: "c-CTABlock",
//                               children: [
//                                 (0, d.jsx)("span", {
//                                   className:
//                                     "[ c-CTABlock__label ] [ c-Label c-Label--dark ]",
//                                   children: "Visit the Forum",
//                                 }),
//                                 (0, d.jsx)("h4", {
//                                   className: "c-CTABlock__heading",
//                                   children:
//                                     "View or submit delegate applications",
//                                 }),
//                                 (0, d.jsx)("div", {
//                                   className: "c-CTABlock__image",
//                                   children: (0, d.jsx)(o.Z, { imageObj: K }),
//                                 }),
//                               ],
//                             }),
//                           }),
//                           (0, d.jsx)("div", {
//                             className: "carousel-cell",
//                             children: (0, d.jsxs)(u.d, {
//                               href: "https://portal.arbitrum.one",
//                               className: "c-CTABlock",
//                               children: [
//                                 (0, d.jsx)("span", {
//                                   className:
//                                     "[ c-CTABlock__label ] [ c-Label c-Label--dark ]",
//                                   children: "Explore the Ecosystem",
//                                 }),
//                                 (0, d.jsx)("h4", {
//                                   className: "c-CTABlock__heading",
//                                   children:
//                                     "See projects in the Arbitrum universe",
//                                 }),
//                                 (0, d.jsx)("div", {
//                                   className: "c-CTABlock__image",
//                                   children: (0, d.jsx)(o.Z, { imageObj: L }),
//                                 }),
//                               ],
//                             }),
//                           }),
//                           (0, d.jsx)("div", {
//                             className: "carousel-cell",
//                             children: (0, d.jsxs)(u.d, {
//                               href: B.l9,
//                               className: "c-CTABlock",
//                               children: [
//                                 (0, d.jsx)("span", {
//                                   className:
//                                     "[ c-CTABlock__label ] [ c-Label c-Label--dark ]",
//                                   children: "Read the docs",
//                                 }),
//                                 (0, d.jsx)("h4", {
//                                   className: "c-CTABlock__heading",
//                                   children: "Discover the future we believe in",
//                                 }),
//                                 (0, d.jsx)("div", {
//                                   className: "c-CTABlock__image",
//                                   children: (0, d.jsx)(o.Z, { imageObj: M }),
//                                 }),
//                               ],
//                             }),
//                           }),
//                         ],
//                       }),
//                     }),
//                   ],
//                 }),
//                 (0, d.jsx)(n.Z, {}),
//                 (0, d.jsx)(x.Z, { elements: O }),
//               ],
//             }),
//           ],
//         });
//       }
//     },
//     28396: function (a, b, c) {
//       "use strict";
//       c.d(b, {
//         Z: function () {
//           return g;
//         },
//       });
//       var d = c(85893),
//         e = c(8151),
//         f = c(82508);
//       function g(a) {
//         var b = a.isTransparent,
//           c = a.path;
//         return (0, d.jsxs)(f.d, {
//           href: "".concat(e.l9).concat(void 0 === c ? "" : c),
//           className: "c-Button c-Button--icon ".concat(
//             void 0 !== b && b ? "c-Button--outline" : "c-Button--blue"
//           ),
//           children: [
//             (0, d.jsx)("svg", {
//               xmlns: "http://www.w3.org/2000/svg",
//               width: "19.967",
//               height: "22.996",
//               viewBox: "0 0 19.967 22.996",
//               children: (0, d.jsxs)("g", {
//                 transform: "translate(-908.033 -2770.004)",
//                 children: [
//                   (0, d.jsxs)("g", {
//                     transform: "translate(916 2778)",
//                     fill: "none",
//                     stroke: "#fff",
//                     strokeWidth: "2",
//                     children: [
//                       (0, d.jsx)("rect", {
//                         width: "12",
//                         height: "15",
//                         stroke: "none",
//                       }),
//                       (0, d.jsx)("rect", {
//                         x: "1",
//                         y: "1",
//                         width: "10",
//                         height: "13",
//                         fill: "none",
//                       }),
//                     ],
//                   }),
//                   (0, d.jsx)("path", {
//                     d: "M-21866.617-19355.25v-15h12",
//                     transform: "translate(22779.682 22145.254)",
//                     fill: "none",
//                     stroke: "#94cff7",
//                     strokeWidth: "2",
//                   }),
//                   (0, d.jsx)("path", {
//                     d: "M-21866.617-19355.25v-15h12",
//                     transform: "translate(22775.65 22141.254)",
//                     fill: "none",
//                     stroke: "#53b3f3",
//                     strokeWidth: "2",
//                   }),
//                 ],
//               }),
//             }),
//             "Read docs",
//           ],
//         });
//       }
//     },
//   },
//   function (a) {
//     a.O(
//       0,
//       [5269, 5149, 7083, 9460, 1787, 9721, 5186, 6275, 9774, 2888, 179],
//       function () {
//         var b;
//         return a((a.s = 48312));
//       }
//     ),
//       (_N_E = a.O());
//   },
// ]);

# Stripe payment link — Sacrificial Conversations

**Use this link when the client pays again next month** (e.g. swap the "Paid" button back to "Pay here" and point to this URL).

## URL

```
https://buy.stripe.com/eVqcN5cGi4vm1J69AP73G00
```

## Notes

- $500/month package.
- To restore the pay button: in `src/components/sections/Services.tsx`, replace the green "Paid" status block with an `<a>` that uses this `href` and says "Pay here".

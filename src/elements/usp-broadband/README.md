## USP Broadband

These are usp tags designed specifically for broadband.

The tags are already contained within the comms-ui repo, however as we need them on p0 and p4 tenancies, we have had to add them to trustyle.

This is a temporary measure until we migrate the p0 and p4 tenancy cards into comms-ui, so we aren't repeating ourselves.

It was decided to copy them over for now, rather than importing comms-ui into trustyle, avoiding a cross-dependency and tight coupling of the libraries.

In future, once `sponsored-product` and `sponsored-product-rate-table` are migrated for broadband, this component can be deleted.

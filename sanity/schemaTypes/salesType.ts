import { TagIcon } from "@sanity/icons";
import { title } from "process";
import { defineField,defineType } from "sanity";

export const salesType = defineType({
    name: "sale",
    title: "Sale",
    icon: TagIcon,
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Sale Title",
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Sale Description",
        }),
        defineField({
            name: "discountAmount",
            type: "number",
            title: "Discount Amount",
            description: "Enter the discount amount in percentage",
        }),
        defineField({
            name: "cuponCode",
            type: "string",
            title: "Cupon Code",
            description: "Enter the cupon code for the sale",
        }),
        defineField({
            name:"ValidFrom",
            type:"datetime",
            title:"Valid From",
        }),
        defineField({
            name:"ValidTo",
            type:"datetime",
            title:"Valid To",
        }),
        defineField({
            name:"isActive",
            type:"boolean",
            title:"Is Active",
            description:"Check if the sale is active",
            initialValue:true,

        })
    ],
    preview: {
        select: {
            title: "title",
            discountAmount: "discountAmount",
            couponCode: "couponCode",
            isActive: "isActive",
        },
        prepare(selection) {
            const { title, discountAmount, couponCode, isActive } = selection;
            const status = isActive ? "Active" : "Inactive";
            return {
                title,
                subtitle: `${discountAmount}% off - Code: ${couponCode} - ${status}`,
            };
        },
    },
});
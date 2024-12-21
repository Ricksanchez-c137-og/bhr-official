import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productTypes = defineType({
    name: 'productTypes',
    title: 'Products',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({
            name:"name",
            title:"Product Name",
            type:"string",
            validation: Rule => Rule.required()
        }),
        defineField({
            name:"slug",
            title:"Slug",
            type:"slug",
            validation: Rule => Rule.required()
        }),
        defineField({
            name:"Image",
            title:"Product Image",
            type:"image",
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name:"price",
            title:"Price",
            type:"number",
            validation: Rule => Rule.required().min(0)
        }),
        defineField({
            name:"description",
            title:"Description",
            type:"blockContent",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: Rule => Rule.required().min(0)
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            price: 'price',
        },
        prepare({ title, media, price }) {
            return {
                title: title,
                subtitle: `$${price}`,
                media: media
            }
        }
    }
})
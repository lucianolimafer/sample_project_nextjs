import { GetStaticProps } from "next";

interface IProduct {
    id: string;
    title: string;
}

interface Top10Props {
    products: IProduct[];
}

export default function Top10 ({products}: Top10Props) {
    return (
        <div>
            <h1>Top 10</h1>
            <ul>
                {console.log(products)}
                {products.map(product => {
                    <li key={product.id}>
                        <h1>{product.title}</h1>
                    </li>
                })}
            </ul>
        </div>
    )
}

export const getStaticProps: GetStaticProps<Top10Props> = async (context) => {
    const response = await fetch('http://localhost:3333/products');
    const products = await response.json();

    return {
        props: {
            products,
        },
        revalidate: 5,
    }
}
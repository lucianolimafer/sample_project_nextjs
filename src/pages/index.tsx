import { GetServerSideProps } from 'next';
import * as S from '../styles/pages/Home';

interface IProduct {
  id: number;
  title: string;
  price: number;
  category_id: string;
  slug: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({recommendedProducts}: HomeProps) {
  return (
    <div>
      <S.Title>Products Recommended</S.Title>

      <ul>
        {recommendedProducts.map(recommendedProduct => {
          return (
            <li key={recommendedProduct.id}>
              <S.Title>{recommendedProduct.title}</S.Title>
              <S.Title>{recommendedProduct.price}</S.Title>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}
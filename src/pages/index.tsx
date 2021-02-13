import { useEffect, useState } from 'react';
import * as S from '../styles/pages/Home';

interface IProduct {
  id: number;
  title: string;
  price: number;
  category_id: string;
  slug: string;
}

export default function Home() {
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProducts(data);
      });
    });
  }, []);

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

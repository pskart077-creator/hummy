import type { CommerceItem } from "@/data/products";
import { buildCheckoutUrl, buildProductWhatsAppMessage } from "@/lib/whatsapp";

type ProductDetailsProps = {
  item: CommerceItem;
};

export function ProductDetails({ item }: ProductDetailsProps) {
  const checkoutUrl = buildCheckoutUrl(buildProductWhatsAppMessage(item.name));

  return (
    <div className="product-details" id="produto-contato">
      <div className="product-details__rating">
        <span aria-label="5 estrelas">★★★★★</span>
        <strong>+1.000 avaliações HummyLovers</strong>
      </div>

      <h1 className="product-details__title">{item.name}</h1>
      <p className="product-details__summary">
        <strong>{item.name}</strong> oferece uma forma prática de incluir
        autocuidado, energia e confiança na rotina com uma experiência Hummy
        simples de manter.
      </p>

      <div className="product-details__actions">
        <a className="product-details__buy" href={checkoutUrl}>
          Ver preço
        </a>
      </div>

      <div className="product-details__accordion">
        <details open>
          <summary>Descrição</summary>
          <p>{item.description}</p>
        </details>
        <details>
          <summary>Benefícios dos ingredientes</summary>
          <ul>
            {item.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </details>
        <details>
          <summary>Ingredientes</summary>
          <ul>
            {item.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </details>
        <details>
          <summary>Qual a melhor forma de consumir?</summary>
          <p>{item.usage}</p>
        </details>
      </div>
    </div>
  );
}

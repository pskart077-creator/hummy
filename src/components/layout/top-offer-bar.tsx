import { siteConfig } from "@/config/site";

const repeatedOffers = Array.from({ length: 5 });

export function TopOfferBar() {
  return (
    <div className="top-offer-bar">
      <div className="top-offer-bar__track">
        <div className="top-offer-bar__group">
          {repeatedOffers.map((_, index) => (
            <div className="top-offer-bar__item" key={`offer-1-${index}`}>
              <strong>{siteConfig.offer.title}</strong>
              <span>{siteConfig.offer.subtitle}</span>
            </div>
          ))}
        </div>

        <div className="top-offer-bar__group" aria-hidden="true">
          {repeatedOffers.map((_, index) => (
            <div className="top-offer-bar__item" key={`offer-2-${index}`}>
              <strong>{siteConfig.offer.title}</strong>
              <span>{siteConfig.offer.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
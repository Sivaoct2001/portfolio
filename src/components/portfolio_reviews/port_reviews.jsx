import React from "react";
import reviewimg from "../../assets/icons/veiw.img.png";
import "./port_reviews.css";
const Review = () => {
  const Reviewlist = [
    {
      Icon: reviewimg,
      Bio: "Achievements and Recognition: If you have received any awards, recognition, or positive feedback for your work, make sure to include them. This adds credibility to your portfolio and demonstrates your talent and dedication.",
    },
    {
      Icon: reviewimg,
      Bio: "Achievements and Recognition: If you have received any awards, recognition, or positive feedback for your work, make sure to include them. This adds credibility to your portfolio and demonstrates your talent and dedication.",
    },
    {
      Icon: reviewimg,
      Bio: "Achievements and Recognition: If you have received any awards, recognition, or positive feedback for your work, make sure to include them. This adds credibility to your portfolio and demonstrates your talent and dedication.",
    },
    {
      Icon: reviewimg,
      Bio: "Achievements and Recognition: If you have received any awards, recognition, or positive feedback for your work, make sure to include them. This adds credibility to your portfolio and demonstrates your talent and dedication.",
    },
    {
      Icon: reviewimg,
      Bio: "Achievements and Recognition: If you have received any awards, recognition, or positive feedback for your work, make sure to include them. This adds credibility to your portfolio and demonstrates your talent and dedication.",
    },
    {
      Icon: reviewimg,
      Bio: "Achievements and Recognition: If you have received any awards, recognition, or positive feedback for your work, make sure to include them. This adds credibility to your portfolio and demonstrates your talent and dedication.",
    },
  ];
  const Renderreview = Reviewlist.map((reviewtype) => {
    return (
      <div className="main_review">
        <img src={reviewimg} alt="" />
        <p>{reviewtype.Bio}</p>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="review_cards">
        <h1>REVIEWS</h1>
        <div className="review_herocards">{Renderreview}</div>
      </div>
    </React.Fragment>
  );
};
export default Review;

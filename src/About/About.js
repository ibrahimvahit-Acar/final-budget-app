import React from "react";
import NavTab from "../NavTab/NavTab";
import "./About.css";
function About() {
  return (
    <div className="about">
      <>
        <NavTab />
      </>
      <div className="about-context">
        <div className="header-about">
          <h1 >Elektronik Cüzdanım </h1>
          <h3>
            Bu uygulama size online olarak bütçenizi takip imkanı sunar.Yeni işlem ekle butonuyla yeni 
            işleminizin ne olduğunu,ne kadar olduğunu ve bu işlemin yapılma tarihini belirleyebilirsiniz.
            Eklediğinizin işlemlerin yanında eski işlemlerinizide geçmiş alanında görebilirsiniz.Bu işlemlerin 
            yanında gelir olduğunda yeşil, gider olduğunda kırmızı renkli olduğunu görebilirsiniz.Ve bu işlemlerin 
            durumuna göre o ana kadar ne kadar harcama ve gelire sahip olduğunuzu ve bütçe alanında 
            cüzdanın son durumunu online olarak öğrenebilirsiniz.
          </h3>
        </div>
      </div>
    </div>
  );
}
export default About;

import React from "react";
import section1Styles from "../styles/Section1.module.scss";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className={section1Styles.section1}>
      <div className={section1Styles.section1ImageContainer}>
        <Image
          src="/tree.png"
          alt="Arbre"
          fill
          // width={400}
          // height={400}
          style={{ objectFit: "contain" }}
        ></Image>
      </div>
      <div className={section1Styles.section1Right}>
        <h2>Qu'est-ce que la naturopathie ?</h2>
        <p>
          La naturopathie est une pratique de médecine alternative qui vise à
          promouvoir la santé et le bien-être en utilisant des méthodes
          naturelles. Les naturopathes sont formés pour aider les gens à
          améliorer leur santé en utilisant des techniques naturelles telles que
          l'alimentation saine, l'exercice, les herbes et autres suppléments
          naturels, et les techniques de relaxation comme le yoga et la
          méditation. Ils s'efforcent également de comprendre et de traiter les
          causes sous-jacentes de la maladie plutôt que simplement de soulager
          les symptômes. La naturopathie est souvent utilisée en complément
          d'autres formes de soins de santé, mais elle peut également être
          utilisée comme une forme de soins primaires.
        </p>
      </div>
    </div>
  );
};

export default Section1;

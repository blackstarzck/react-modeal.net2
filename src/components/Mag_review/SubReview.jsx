import React from 'react';
import styles from './SubReview.module.css';

function SubReview() {
    return (
        <div className={styles.section}>
            <ul className={styles.item_wrapper}>
                <li className={styles.item}>
                    <a className={styles.link}href="">
                        <div className={styles.img}>
                            <img src="/Mag_sub_page/review/item01.png" alt="후기"/>
                        </div>
                        <div className={styles.review}>
                            <h3 className={styles.title}>장기렌트 / 셀토스 / 디젤</h3>
                            <p className={styles.para}>1. 자동차를 구입하게 된 계기- 소품팀에서 일하다가 이번에 프리랜서로 독립하게 되어서 처음으로 차를 사게 되었습니다. 2. 왜 모두가딜러에서 구매하셨는가요?- 첫 차라 차량을 구매하는데 좀 막막했었어요. 어떤 차가 좋을지는 주변 추천과 정보를 검색해서 정하긴 했는데 어디서 어떻게 구입할지가 너무 막막하더라구요. 아무래도 차에 대해 잘 모르다보니까 딜러들과 흥정할 자신은 없고, 제 사업체를 차린지가 얼마 안돼서 예산은 최대한 아끼고 싶고..그래서 여기 저기 검색하던 중 모두가딜러를 알게됐는데 제가 직접 견적내고 바로 계약까지 가능해서 모두가딜러에서 사게되었어요. 가격도 확실히 저렴하게 샀구요!</p>
                        </div>
                    </a>
                </li>
            </ul>
            <button className={styles.more_btn}>출고후기 더보기 +</button>
        </div>
    )
}

export default SubReview

import * as React from "react";

import './MainNavigation.style.scss';

interface IMainNaviagation {

    imagePath: string;

    rightContent?: React.ReactNodeArray | React.ReactNode | undefined;

    informationTopRight?: string;

}

export declare const MainNavigation: React.FunctionComponent<IMainNaviagation>;

export {};


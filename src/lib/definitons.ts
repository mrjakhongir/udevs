export interface NavItem {
	id: number;
	content: string;
	link: string;
}

export interface SubMenu {
	id: number;
	iconSrc: string;
	content: string;
	link: string;
	category: string;
}

export interface NavItemLarge {
	id: number;
	content: string;
	link: string;
	subMenu?: SubMenu[];
}

export interface Service {
	id: number;
	img: string;
	title: string;
}

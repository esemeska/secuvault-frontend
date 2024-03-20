export class NavItem {
    constructor (title, NavComponent, ContentComponent) {
        this.title = title;
        this.NavComponent = NavComponent;
        this.ContentComponent = ContentComponent; 
    }

    getTitle() {
        return this.title;
    }

    getNav() {
        return this.NavComponent;
    }

    getContent() {
        return this.ContentComponent;
    }


}
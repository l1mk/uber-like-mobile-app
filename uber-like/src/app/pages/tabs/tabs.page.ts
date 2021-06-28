import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage  {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;

  public selectedTab;
  public profile = "assets/icon/profile_white_icon.svg";
  private profile_white = "assets/icon/profile_white_icon.svg";
  private profile_blue = "assets/icon/profile_icon.svg";
  public home = "assets/icon/home_white_icon.svg";
  private home_white = "assets/icon/home_white_icon.svg";
  private home_blue = "assets/icon/home_icon.svg";
  public setting = "assets/icon/setting_white_icon.svg";
  private setting_white = "assets/icon/setting_white_icon.svg";
  private setting_blue = "assets/icon/setting_icon.svg";

  constructor() {}

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    console.log("set current tab", this.tabs.getSelected());
    if (this.selectedTab === "tab1"){
        this.profile = this.profile_blue;
        this.home = this.home_white;
        this.setting = this.setting_white;

    } else if (this.selectedTab === "tab2"){
        this.home = this.home_blue;
        this.profile = this.profile_white;
        this.setting = this.setting_white;

    } else if (this.selectedTab === "tab3"){
        this.setting = this.setting_blue;
        this.home = this.home_white;
        this.profile = this.profile_white;
    }

  }
}

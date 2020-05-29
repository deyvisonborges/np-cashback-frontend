<template>
  <DashboardContainer>
    <Modal>
			<span>Deseja mesmo <strong> cancelar o pedido? </strong> </span>
		</Modal>
    <Sidebar>
      <SidebarOptions></SidebarOptions>
    </Sidebar>
    <DashboardContent>
      <NavbarContainer></NavbarContainer>
      <nuxt-child></nuxt-child>
    </DashboardContent>
  </DashboardContainer>
</template>

<script>
import DashboardContainer from "../components/dashboard/dashboard-container";
import DashboardContent from "../components/dashboard/dashboard-content";
import Sidebar from "../components/sidebar/sidebar";
import SidebarOptions from "../components/sidebar/options";
import NavbarContainer from "../components/navbar/navbar-container";

import Timeline from "../components/timeline";
import Modal from "../components/modal";

export default {
  name: "PageDashboard",
  components: {
    DashboardContainer,
    DashboardContent,
    Sidebar,
    SidebarOptions,
    NavbarContainer,
    Timeline,
    Modal
  }
};
</script>

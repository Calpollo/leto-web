import Vue from 'vue'

import { BootstrapVue, BIconBoxArrowUpRight, BIconPerson, BIconDoorOpen, BIconChevronDoubleUp, BIconChevronDoubleDown, BIconTrash, BIconTrashFill, BIconPlus, BIconX, BIconFilter, BIconInfo, BIconThreeDots, BIconKey, BIconArrowCounterclockwise, BIconFiles, BIconCheck, BIconCodeSquare, BIconEnvelope, BIconPhone, BIconPen, BIconExclamationTriangle, BIconDownload, BIconFolderPlus, BIconFolderSymlink, BIconCloudPlus, BIconPersonX, BIconPrinter, BIconExclamationCircle, BIconPieChart, BIconCardChecklist, BIconViewList, BIconFileEarmarkPdf, BIconUiChecks, BIconFilePdf, BIconArrowDown, BIconCalendar2Week, BIconJournalMedical, BIconBarChart, BIconArrowRight, BIconClockHistory, BIconTelephone, BIconPersonBadge, BIconCurrencyEuro, BIconCartCheck, BIconCartX, BIconArrowUp, BIconGoogle, BIconGithub, BIconFacebook, BIconLinkedin, BIconArrowRepeat } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)

const icons = [BIconBoxArrowUpRight, BIconPerson, BIconDoorOpen, BIconChevronDoubleUp, BIconChevronDoubleDown, BIconTrash, BIconTrashFill, BIconPlus, BIconX, BIconFilter, BIconInfo, BIconThreeDots, BIconKey, BIconArrowCounterclockwise, BIconFiles, BIconCheck, BIconCodeSquare, BIconEnvelope, BIconPhone, BIconPen, BIconExclamationTriangle, BIconDownload, BIconFolderPlus, BIconFolderSymlink, BIconCloudPlus, BIconPersonX, BIconPrinter, BIconExclamationCircle, BIconPieChart, BIconCardChecklist, BIconViewList, BIconFileEarmarkPdf, BIconUiChecks, BIconFilePdf, BIconArrowDown, BIconCalendar2Week, BIconJournalMedical, BIconBarChart, BIconArrowRight, BIconClockHistory, BIconTelephone, BIconPersonBadge, BIconCurrencyEuro, BIconCartCheck, BIconCartX, BIconArrowUp, BIconGoogle, BIconGithub, BIconFacebook, BIconLinkedin, BIconArrowRepeat]
icons.forEach(icon => {
  const componentString = icon.options.name.replace(/([A-Z])/g, " $1").split(' ').slice(1).join('-').toLowerCase()
  Vue.component(componentString, icon)
})
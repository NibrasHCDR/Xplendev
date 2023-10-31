import React from 'react'
import AdministracionHome from '../../../components/siteWizardComponents/AdministracionHome'
import AdministracionPresentacion from '../../../components/siteWizardComponents/AdministracionPresentacion'
import AdministracionDescripcion from '../../../components/siteWizardComponents/AdministracionDescripcion'
import FooterAdmin from '../../../components/siteWizardComponents/FooterAdmin'

export default function MisPaginasWeb({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <section><AdministracionHome/></section>
    <section><AdministracionPresentacion/></section>
    <section><AdministracionDescripcion/></section>
    <section><FooterAdmin/></section>
    </>
  )
}
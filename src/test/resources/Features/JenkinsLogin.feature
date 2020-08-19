Feature: Test Login Jenkins
Scenario: Login valide

   Given se connecter a l'inteface Jenkins
   When un utilsateur sasie un login valide
   And Cliquer sur connecter
   Then cliquer sur deconnecter 

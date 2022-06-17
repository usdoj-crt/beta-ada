const { test, expect } = require('@playwright/test');
test('Test the open all accordions toggle', async ({ page }) => {
  // Go to http://localhost:4000/
  await page.goto('http://localhost:4000/service-animals-faqs/');
  // Click text=Open all sections
  await page.locator('text=Open all sections').click();
  // Click summary:has-text("Q1. What is a service animal?")
  await page.locator('summary:has-text("Q1. What is a service animal?")').click();
  // Click summary:has-text("Q2. What does do work or perform tasks mean?")
  await page.locator('summary:has-text("Q2. What does do work or perform tasks mean?")').click();
  // Click summary:has-text("Q3. Are emotional support, therapy, comfort, or companion animals considered ser")
  await page.locator('summary:has-text("Q3. Are emotional support, therapy, comfort, or companion animals considered ser")').click();
  // Click summary:has-text("Q4. If someone's dog calms them when having an anxiety attack, does this qualify")
  await page.locator('summary:has-text("Q4. If someone\'s dog calms them when having an anxiety attack, does this qualify")').click();
  // Click text=Close all sections
  await page.locator('text=Close all sections').click();
  // Click summary:has-text("Q16. Must a service animal be allowed to ride in an ambulance with its handler?")
  await page.locator('summary:has-text("Q16. Must a service animal be allowed to ride in an ambulance with its handler?")').click();
  // Click text=Close all sections
  await page.locator('text=Close all sections').click();
  // Click text=Open all sections
  await page.locator('text=Open all sections').click();
  // Click summary:has-text("Q1. What is a service animal?")
  await page.locator('summary:has-text("Q1. What is a service animal?")').click();
  // Click summary:has-text("Q2. What does do work or perform tasks mean?")
  await page.locator('summary:has-text("Q2. What does do work or perform tasks mean?")').click();
  // Click summary:has-text("Q3. Are emotional support, therapy, comfort, or companion animals considered ser")
  await page.locator('summary:has-text("Q3. Are emotional support, therapy, comfort, or companion animals considered ser")').click();
  // Click summary:has-text("Q4. If someone's dog calms them when having an anxiety attack, does this qualify")
  await page.locator('summary:has-text("Q4. If someone\'s dog calms them when having an anxiety attack, does this qualify")').click();
  // Click summary:has-text("Q5. Does the ADA require service animals to be professionally trained?")
  await page.locator('summary:has-text("Q5. Does the ADA require service animals to be professionally trained?")').click();
  // Click summary:has-text("Q6. Are service-animals-in-training considered service animals under the ADA?")
  await page.locator('summary:has-text("Q6. Are service-animals-in-training considered service animals under the ADA?")').click();
  // Click summary:has-text("Q7. What questions can a covered entity's employees ask to determine if a dog is")
  await page.locator('summary:has-text("Q7. What questions can a covered entity\'s employees ask to determine if a dog is")').click();
  // Click summary:has-text("Q8. Do service animals have to wear a vest or patch or special harness identifyi")
  await page.locator('summary:has-text("Q8. Do service animals have to wear a vest or patch or special harness identifyi")').click();
  // Click summary:has-text("Q9. Who is responsible for the care and supervision of a service animal?")
  await page.locator('summary:has-text("Q9. Who is responsible for the care and supervision of a service animal?")').click();
  // Click summary:has-text("Q10. Can a person bring a service animal with them as they go through a salad ba")
  await page.locator('summary:has-text("Q10. Can a person bring a service animal with them as they go through a salad ba")').click();
  // Click summary:has-text("Q11. Can hotels assign designated rooms for guests with service animals, out of ")
  await page.locator('summary:has-text("Q11. Can hotels assign designated rooms for guests with service animals, out of ")').click();
  // Click summary:has-text("Q12. Can hotels charge a cleaning fee for guests who have service animals?")
  await page.locator('summary:has-text("Q12. Can hotels charge a cleaning fee for guests who have service animals?")').click();
  // Click summary:has-text("Q13. Can people bring more than one service animal into a public place?")
  await page.locator('summary:has-text("Q13. Can people bring more than one service animal into a public place?")').click();
  // Click summary:has-text("Q14. Does a hospital have to allow an in-patient with a disability to keep a ser")
  await page.locator('summary:has-text("Q14. Does a hospital have to allow an in-patient with a disability to keep a ser")').click();
  // Click summary:has-text("Q15. What happens if a patient who uses a service animal is admitted to the hosp")
  await page.locator('summary:has-text("Q15. What happens if a patient who uses a service animal is admitted to the hosp")').click();
  // Click summary:has-text("Q16. Must a service animal be allowed to ride in an ambulance with its handler?")
  await page.locator('summary:has-text("Q16. Must a service animal be allowed to ride in an ambulance with its handler?")').click();
  // Click summary:has-text("Q17. Does the ADA require that service animals be certified as service animals?")
  await page.locator('summary:has-text("Q17. Does the ADA require that service animals be certified as service animals?")').click();
  // Click summary:has-text("Q18. My city requires all dogs to be vaccinated. Does this apply to my service a")
  await page.locator('summary:has-text("Q18. My city requires all dogs to be vaccinated. Does this apply to my service a")').click();
  // Click summary:has-text("Q19. My city requires all dogs to be registered and licensed. Does this apply to")
  await page.locator('summary:has-text("Q19. My city requires all dogs to be registered and licensed. Does this apply to")').click();
  // Click summary:has-text("Q20. My city requires me to register my dog as a service animal. Is this legal u")
  await page.locator('summary:has-text("Q20. My city requires me to register my dog as a service animal. Is this legal u")').click();
  // Click summary:has-text("Q21. My city / college offers a voluntary registry program for people with disab")
  await page.locator('summary:has-text("Q21. My city / college offers a voluntary registry program for people with disab")').click();
  // Click summary:has-text("Q22. Can service animals be any breed of dog?")
  await page.locator('summary:has-text("Q22. Can service animals be any breed of dog?")').click();
  // Click summary:has-text("Q23. Can individuals with disabilities be refused access to a facility based sol")
  await page.locator('summary:has-text("Q23. Can individuals with disabilities be refused access to a facility based sol")').click();
  // Click summary:has-text("Q24. If a municipality has an ordinance that bans certain dog breeds, does the b")
  await page.locator('summary:has-text("Q24. If a municipality has an ordinance that bans certain dog breeds, does the b")').click();
  // Click summary:has-text("Q25. When can service animals be excluded?")
  await page.locator('summary:has-text("Q25. When can service animals be excluded?")').click();
  // Click summary:has-text("Q26. When might a service dog's presence fundamentally alter the nature of a ser")
  await page.locator('summary:has-text("Q26. When might a service dog\'s presence fundamentally alter the nature of a ser")').click();
  // Click summary:has-text("Q27. What does under control mean? Do service animals have to be on a leash? Do ")
  await page.locator('summary:has-text("Q27. What does under control mean? Do service animals have to be on a leash? Do ")').click();
  // Click summary:has-text("Q28. What can my staff do when a service animal is being disruptive?")
  await page.locator('summary:has-text("Q28. What can my staff do when a service animal is being disruptive?")').click();
  // Click summary:has-text("Q29. Are hotel guests allowed to leave their service animals in their hotel room")
  await page.locator('summary:has-text("Q29. Are hotel guests allowed to leave their service animals in their hotel room")').click();
  // Click summary:has-text("Q30. What happens if a person thinks a covered entity's staff has discriminated ")
  await page.locator('summary:has-text("Q30. What happens if a person thinks a covered entity\'s staff has discriminated ")').click();
  // Click summary:has-text("Q31. Are stores required to allow service animals to be placed in a shopping car")
  await page.locator('summary:has-text("Q31. Are stores required to allow service animals to be placed in a shopping car")').click();
  // Click summary:has-text("Q32. Are restaurants, bars, and other places that serve food or drink required t")
  await page.locator('summary:has-text("Q32. Are restaurants, bars, and other places that serve food or drink required t")').click();
  // Click summary:has-text("Q33. Are gyms, fitness centers, hotels, or municipalities that have swimming poo")
  await page.locator('summary:has-text("Q33. Are gyms, fitness centers, hotels, or municipalities that have swimming poo")').click();
  // Click summary:has-text("Q34. Are churches, temples, synagogues, mosques, and other places of worship req")
  await page.locator('summary:has-text("Q34. Are churches, temples, synagogues, mosques, and other places of worship req")').click();
  // Click summary:has-text("Q35. Do apartments, mobile home parks, and other residential properties have to ")
  await page.locator('summary:has-text("Q35. Do apartments, mobile home parks, and other residential properties have to ")').click();
  // Click summary:has-text("Q36. Do Federal agencies, such as the U.S. Department of Veterans Affairs, have ")
  await page.locator('summary:has-text("Q36. Do Federal agencies, such as the U.S. Department of Veterans Affairs, have ")').click();
  // Click summary:has-text("Q37. Do commercial airlines have to comply with the ADA?")
  await page.locator('summary:has-text("Q37. Do commercial airlines have to comply with the ADA?")').click();
  // Click text=Open all sections
  await page.locator('text=Open all sections').click();

  await expect(page.locator('#crt-page--expandaccordions')).toHaveText('Close all sections');
});
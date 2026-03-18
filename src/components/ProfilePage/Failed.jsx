import { useState } from "react";




function Failed() {

    const selector1 = { groupA: "usersSetA"};
    const selector2 = { groupB: "usersSetB"};

   const usersSetA = {
    array1: [{ name: "John", lastName: "Doe", email: "john1@example.com", username: "jdoe1", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array2: [{ name: "Jane", lastName: "Smith", email: "jane2@example.com", username: "jsmith2", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array3: [{ name: "Mike", lastName: "Brown", email: "mike3@example.com", username: "mbrown3", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array4: [{ name: "Sara", lastName: "White", email: "sara4@example.com", username: "swhite4", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array5: [{ name: "Tom", lastName: "Clark", email: "tom5@example.com", username: "tclark5", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array6: [{ name: "Emma", lastName: "Lewis", email: "emma6@example.com", username: "elewis6", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array7: [{ name: "Liam", lastName: "Hall", email: "liam7@example.com", username: "lhall7", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array8: [{ name: "Olivia", lastName: "Allen", email: "olivia8@example.com", username: "oallen8", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array9: [{ name: "Noah", lastName: "Young", email: "noah9@example.com", username: "nyoung9", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array10:[{ name: "Ava", lastName: "King", email: "ava10@example.com", username: "aking10", createdAt: "2026-03-11", updatedAt: "2026-03-11" }]
  }

   const usersSetB = {
    array1: [{ name: "Ethan", lastName: "Scott", email: "ethan1@example.com", username: "escott1", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array2: [{ name: "Mia", lastName: "Green", email: "mia2@example.com", username: "mgreen2", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array3: [{ name: "Lucas", lastName: "Adams", email: "lucas3@example.com", username: "ladams3", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array4: [{ name: "Amelia", lastName: "Baker", email: "amelia4@example.com", username: "abaker4", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array5: [{ name: "Mason", lastName: "Nelson", email: "mason5@example.com", username: "mnelson5", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array6: [{ name: "Harper", lastName: "Carter", email: "harper6@example.com", username: "hcarter6", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array7: [{ name: "Logan", lastName: "Mitchell", email: "logan7@example.com", username: "lmitchell7", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array8: [{ name: "Ella", lastName: "Perez", email: "ella8@example.com", username: "eperez8", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array9: [{ name: "James", lastName: "Roberts", email: "james9@example.com", username: "jroberts9", createdAt: "2026-03-11", updatedAt: "2026-03-11" }],
    array10:[{ name: "Sophia", lastName: "Turner", email: "sophia10@example.com", username: "sturner10", createdAt: "2026-03-11", updatedAt: "2026-03-11" }]
  }


    return(
        <div>
            <select name="dropdown" id="">
                <option value="a"></option>
                <option value="b"></option>
            </select>

        </div>
    )
}
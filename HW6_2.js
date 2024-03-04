const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
        },
],
};



function findValueByKey(name, node = company) {
    if (node.name === name) 
    {
        return node;
    }



    if (node.clients && node.clients.length > 0) {
        for (let client of node.clients)
         {
            let result = findValueByKey(name, client);
            if (result) 
            {
                return result;
            }
        }
     }


    if (node.partners && node.partners.length > 0) {
        for (let partner of node.partners) 
        {
            let result = findValueByKey(name, partner);
            if (result) 
            {
                return result;
            }
        }
    }

    return null; 
}








let foundCompany = findValueByKey('Клієнт 1.2.3');
if (foundCompany) {
    console.log('Company found:', foundCompany);
} else {
    console.log('Company not found.');
}

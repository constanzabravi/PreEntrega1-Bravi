//Información REAL de firebase que primero pasa por este adaptador. 
//Esta función la exportamos a product.js de ServicesFirebase. 

export const createAdaptedCategoryFromFirestore = (doc) => {
    const data = doc.data()
    
    const CategoryAdapted = {
        id: doc.id,
        label: data.label,
        order: data.order,
        slug: data.slug,
    }


    return CategoryAdapted
}
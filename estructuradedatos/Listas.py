ciudades = ["Lima", "Arequipa", "Trujillo", "Huanuco", "Huacho"]
#Mostrar toda la iista

print("Las ciudades son: ", ciudades)
# Mostrar solo un elemento de las listas

print("La tercera ciudad es: ", ciudades[2])
# Mostrar un rango de la lista !NO TOMA EL DATO QUE ESTA EN LA POCISION DEL SEGUNDO RANGO 

print("Las ciudades que estan desde la primera hasta la cuarta son: ", ciudades[0:3])
#Sustituir un elemento de la lista por otro

ciudades[1] = "Huaraz"
print("El elemento sustituido es: ", ciudades[1])

#Imprimir todas las ciudades separadas

print("Todas las ciudades listadas")
for i in ciudades:
    print(i)
# Ver si un elemento esta en la lista

ciudad = "Lima"
if ciudad in ciudades:
    print("La ciudad de ", ciudad,  " si se encuentra en la lista")
else:
    print("La ciudad de ", ciudad, " no esta en la lista")

# Mostrar el numero de elementos de una lista

cantidad = len(ciudades)
print("La lista de ciudades tiene ", cantidad, " elementos")

#Añadir un elemento a una lista

ciudades.append("Caraz")

#Añadir un elemento en un indice determinado

ciudades.insert(2, "Carhuaz")

#Eliminar un elemento de la lista

ciudades.remove("Huaraz")



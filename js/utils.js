export function notANumber(value){
    return isNaN(value) || value == "";
}

export function calculateValueSoftware(wage, percentage){
    return wage * (percentage / 100).toFixed(2);
}
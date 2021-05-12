using LinearAlgebra

function pm(A,α,β)
    maxiter = 100;
    n = size(A,1)
    x = ones(n,1)
    y = ones(n,1)
    
    for i = 1:maxiter 
        x = A'*(y.^α)
        x = x ./ norm(x,1)
        y = A*(x.^β)
        y = y ./ norm(y,1)
    end
    
    return x,y
end

A = [0 0 0 0 0 0; 1 0 0 0 0 0; 1 0 0 0 0 0; 1 0 0 0 0 0; 1 0 0 0 0 0; 0 1 1 1 1 0]
A = [0 1 1 1 1 0; 0 0 0 0 0 1; 0 0 0 0 0 1; 0 0 0 0 0 1; 0 0 0 0 0 1; 0 0 0 0 0 0]

α = .5
β = .9 #1/α-.001 

H = [0 α; β 0]
λ = maximum(eigvals(H))

x,y = pm(A,α,β)
[x y]

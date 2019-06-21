*11612733 杜子豪*

* **3.E——**

* 17.

  Since $V/U$ is finite dimensional, denote $n=\dim V/U$

  Thus suppose $v_1+U,...,v_n+U$ is basis of $V/U$ where $v_1,..,v_n\in V$

  We can get $v_1,...,v_n$ is linearly independent and $v_i\notin U$

  Let $W=\mathrm{span}(v_1,...,v_n)$

  Thus $\dim W=n=\dim V/U$

  $\forall v\in V,\exist a_1,...a_n\in\mathrm{F}​$, s.t. $v+U=a_1(v_1+U)+\cdots+a_n(v_n+U)=a_1v_1+\cdots+a_nv_n+U​$

  Hence $v-(a_1v_1+\cdots+a_nv_n)\in U$

  Since $a_1v_1+\cdots+a_nv_n\in W$, $v=[v-(a_1v_1+\cdots+a_nv_n)]+[a_1v_1+\cdots+a_nv_n]$ and $U,W\sub V$

  $V=W+U$

  Suppose $w\in W\cap U$, $w=b_1v_1+\cdots+b_nv_n$

  Since $w\in U$, $w+U=b_1v_1+\cdots+b_nv_n+U=0+U$

  Thus $b_1=\cdots=b_n=0$

  $W\cap U=\{0\}$ Hence $V=W\oplus U$

  

* 18.

  Suppose such $S$ exist

  $\forall u\in U$, $Tu=S\circ\pi(u)=S(0+U)=0$, it follows that $U\sub\mathrm{null}\,T$

  Suppose $U\sub\mathrm{null}\,T$

  Define $S\in\mathcal{L}(V/U,W):S(v+U)=Tv$

  If $v_1+U=v_2+U,v_1-v_2\in U$, thus $T(v_1-v_2)=0\Rightarrow Tv_1=Tv_2$

  Thus it is well defined and obvious it is linear

  $\forall v\in V$, $S\circ\pi(v)=S(v+U)=Tv$ 

  Hence such $S$ satisfies the condition 

  

* 20.

  * a.

    $\forall S_1,S_2\in\mathcal{L}(V/U,W)$ and $\forall \lambda_1,\lambda_2\in\mathrm{F}$

    $\Gamma(\lambda_1S_1+\lambda_2S_2)=(\lambda_1S_1+\lambda_2S_2)\circ\pi=\lambda_1S_1\circ\pi+\lambda_2S_2\circ\pi=\lambda_1\Gamma(S_1)+\lambda_2\Gamma(S_2)$

    Thus it is linear

  * b.

    $\Gamma(S)=0$ iff $S\circ\pi(v)=0$ for $\forall v\in V$ iff $S(v+U)=0$ for $\forall v\in V$ iff $S=0$

    Thus it is injective

  * c.

    By problem 18.

    Denote $M=\{T\in\mathcal{L}(V,W):Tu=0\;\mathrm{for \;every}\;u\in U\}$

    Since $\forall T\in\mathcal{L}(V,W)$ s.t. $U\sub \mathrm{null}\,T$ are euivalent to exist $S\in\mathcal{L}(V/U,W)$ s.t. $T=S\circ\pi$, 

    we get $M=\mathrm{range}\,\Gamma$

     

* **3.F——**

* 1.

  Since choose arbitrary $v\in V$, suppose $f\in\mathcal{L}(V,\mathrm{F}),f(v)=a\in\mathrm{F}$

  If $a=0$ for all $v$, $f$ is a zero map

  If not, we can find some $v$ s.t. $f(v)=a\not=0$

  Thus $\forall \lambda\in\mathrm{F},\frac{\lambda}{a}f(v)=\lambda$ it follows that $f$ is surjective

  

* 3.

  Extend $v$ to a basis of $V$ as $v,v_2,...,v_n$

  Thus the dual basis of $v,v_2,...,v_n$ is the list $\varphi_1,...,\varphi_n$ s.t. $\varphi_j(v_k)=1$ for $j\not=k$ and $\varphi_j(v_j)=1$

  Hence we can find such $\varphi$ 

  

* 7.

  Since $\varphi_j(x^k)=\frac{(x^k)^{(j)}}{j!}(0)=\frac{k(k-1)\cdots(k-j+1)x^{k-j}}{1\cdots j}(0)$

  If $j=k,\varphi_j(x^j)=1$, if not $\varphi_j(x^k)=0$

  Hence it is the basis of the basis $1,x,...,x^m$ of $\mathcal{P}_m(\R)$

  

* 8.

  * a.

    Suppose $a_m(x-5)^m+\cdots+a_1(x-5)+a_0=0$

    Since only the first part contains $x^m$ thus $a_m$ must equals 0

    Thus we reduce the formula to $m-1​$ degree $a_{m-1}(x-5)^{m-1}+\cdots+a_1(x-5)+a_0​$

    Repeat this procedure, we get $a_m=\cdots=a_0$

    Thus it is a linearly independent list with right length

    It is a basis

  * b.

    Define $\varphi_j(p)=\frac{p^{(j)}(5)}{j!}$ 

    Thus by problem 7, it is a basis of the dual space of $\mathcal{P}_m(\R)$

    

* 11.

  Suppose such $(c_1,...,c_m)​$ and $(d_1,...,d_n)​$ exist

  Hence $A=[c_1,...,c_m]^T[d_1,...,d_n]=[d_1c,d_2c,...,d_nc]​$

  This implies that each column is a scalar multiple of $c​$

  Hence $\mathrm{span}(d_1c,...,d_nc)=\mathrm{span}(c)$, $\mathrm{rank}\,A=1$

  On the contrary, if $\mathrm{rank}\,A=1$, all the column is a scalar multiple of a vector

  Thus $A=[d_1c,..,d_nc]$ and can be written as $A=[c_1,...,c_m]^T[d_1,...,d_n]$

  

* 14.

  * a.

    $T'(\varphi)=\varphi\circ T(p)=\varphi(x^2p+p'')=(2xp+x^2p'+p''')|_{x=4}=8p(4)+16p'(4)+p'''(4)​$

  * b.

    $T'(\varphi)(x^3)=\varphi\circ T(x^3)=\varphi(x^5+6x)=\int_{0}^{1}(x^5+6x)dx=\frac16+3=\frac{19}{6}$

    

* 16.

  Define $S(T)=T'$

  Thus $S(T)=0$ iff $T'=0$ iff $\varphi\circ T=0$ iff $T=0$ Hence $S$ is injective

  Since $\dim\mathcal{L}(V,W)=\dim\mathcal{L}(W',V')$ and $S\in\mathcal{L}(\mathcal{L}(V,W),\mathcal{L}(W',V'))​$

  $S$ is surjective

  Hence $S$ is isomorphic

  

* 20.

  $\forall\varphi\in W^0$, $\forall w\in W,\varphi(w)=0$

  Since $U\sub W$, $\forall u\in U$, we have $\varphi(u)=0$

  Hence $W^0\sub U^0$

  

* 23.

  $\forall \varphi\in(U\cap W)^0,\forall w\in W,u\in U,\varphi(w)=0,\varphi(u)=0$

  Hence $(U\cap W)^0\sub U^0+W^0$

  From problem 20, we have $(U\cap W)^0\supset U^0+W^0$

  Hence they are equal

  

* 26.

  Denote $W=\{v\in V:\varphi(v)=0\; for \; every\;\varphi\in\Gamma\}$

  Thus $\forall\varphi\in W^0,\forall v\in W,\varphi(v)=0$

  This implies that $W^0=\Gamma​$

  

* 28.

  Since $\mathrm{null}\,T'=\mathrm{span}(\varphi)$, $\varphi\circ Tv=0$ for all $v\in V$

  Hence $\mathrm{range}\,T\sub \mathrm{null}\,\varphi$

  Since $\mathrm{null}\,T=(\mathrm{range}\,T)^0=\mathrm{span}(\varphi)$, $\dim(\mathrm{range}\,T)^0=1$

  $\dim\mathrm{range}\,T+\dim(\mathrm{range}\,T)^0=\dim W\Rightarrow\dim\mathrm{range}\,T=\dim W-1$

  

* 32.

  * a to b

    Since $T$ is invertible, $\dim \mathrm{range}\,T=\dim V=n$, which is also colomn rank of $\mathcal{M}(T)$

    Thus the colomn of $\mathcal{M}(T)$ is linearly independent

  * b to c

    It is a linearly independent list with right length

    Hence it spans $\mathrm{F}^{n,1}​$

  * c to d

    Since the rank of row of $\mathcal{M}(T)$ equals the rank of colomn of $\mathcal{M}(T)$, which is $n​$

    Hence the row is linearly independent

  * d to e

    It is a linearly independent list with right length

    Hence it spans $\mathrm{F}^{1,n}​$

  * e to a

    Since it spans $\mathrm{F}^{1,n}​$

    the rank of row of $\mathcal{M}(T)​$ equals the rank of colomn of $\mathcal{M}(T)​$, which is $n​$

    Thus $\dim\mathrm{range}\,T=n=\dim V$

    Which implise $T$ is invertible
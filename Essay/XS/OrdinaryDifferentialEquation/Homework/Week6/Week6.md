*11612733 杜子豪*

* **Review Problem——**

* 13.

  Let $M(x.y)=e^{-x}\cos y-e^{2y}\cos x,N(x,y)=e^{-x}\sin y-2e^{2y}\sin x​$

  Hence $Mdx+Ndy=0​$

  $dM/dy=-e^{-x}\sin y-2e^{2y}\cos x=dN/dx​$, it follows that this equation is exact

  Thus define $\phi(x,y)$ s.t. $d\phi(x,y)=Mdx+Ndy=0$

  Which implies $\phi(x,y)=\int(e^{-x}\cos y-e^{2y}\cos x)dx=-e^{-x}\cos y-e^{2y}\sin x+g(y)​$

  ​				$=\int(e^{-x}\sin y-2e^{2y}\sin x)dy=-e^{-x}\cos y-e^{2y}\sin x+h(x)$

  Hence $\phi(x,y)=-e^{-x}\cos y-e^{2y}\sin xC=​$ where $C​$ is an arbitrary constant

  We get $e^{-x}\cos y+e^{2y}\sin x=c$ where $c$ is an arbitrary constant

  

* 14.

  Let $M(x.y)=e^{2x}+3y,N(x,y)=-1$, thus $Mdx+Ndy=0$

  Since this equation is not exact, we multiple both sides by $\mu(x)$ s.t. $(\mu M)_y=(\mu N)_x$

  which is $\mu M_y=\mu_xN+\mu N_x$ and we get $3\mu=-\mu_x$

  Thus let $\mu=e^{-3x}$ and $(e^{-x}+3ye^{-3x})dx-e^{-3x}dy=0$ is an exact euation

  $\int (e^{-x}+3ye^{-3x})dx=-e^{-x}-ye^{-3x}+g(y)=\int(-e^{3x})dy=-ye^{-3x}+g(x)$

  Hence let $\phi(x,y)=-e^{-x}-ye^{-3x},d\phi=0$

  We get $e^{-x}+ye^{-3x}=c$ which is $y=ce^{3x}-e^{2x}$ where $c$ is an arbitrary constant

  

* 15.

  Suppose $\mu(x)>0$ s.t. $(\mu y)'=\mu y'+2\mu y$.

  Thus $\mu'=2\mu​$, we can let $\mu=e^{2x}​$

  Hence $(e^{2x}y)'=e^{-x^2}$, which implies $e^{2x}y=\int e^{-x^2}dx=\int_{0}^{x}e^{-s^2}ds+c$ where $c$ is an arbitrary constant

  Since $y(0)=3,c=3$

  Hence $y=e^{-2x}\int_{0}^{x}e^{-s^2}dx+3e^{-2x}$

  

* 16.

  Let $M(x.y)=y^3+2y-3x^2,N(x,y)=2x+3xy^2, $hence $Mdx+Ndy=0$

  Since $dM/dy=3y^2+2=dN/dx​$, this equation is exact

  $\int(y^3+2y-3x^2)dx=xy^3+2xy-x^3+g(y)=\int(2x+3xy^2)dy=2xy+xy^3+h(x)​$

  Thus let $\phi(x,y)=xy^3+2xy-x^3,d\phi=0$

  We get $xy^3+2xy-x^3=c$ where $c$ is an arbitrary constant

  

* 17.

  $dy/dx=e^xe^y\Rightarrow e^{-y}dy=e^xdx\Rightarrow -e^{-y}=e^x+C$ where $C$ is an arbitrary constant

  Hence $e^x+e^{-y}=c$ where $c$ is an arbitrary constant

  

* 18.

  Let $M(x,y)=2y^2+6xy-4,N(x,y)=3x^2+4xy+3y^2$, hence $Mdx+Ndy=0$

  Since $dM/dy=4y+6x=dN/dx$, this equation is exact

  $\int(2y^2+6xy-4)dx=2xy^2+3x^2y-4x+g(y)=\int(3x^2+4xy+3y^2)dy=3x^2y+2xy^2+y^3+h(x)$

  Thus let $\phi(x,y)=3x^2y+2xy^2-4x+y^3,d\phi=0​$

  We get $3x^2y+2xy^2-4x+y^3=c$ where $c$ is an arbitrary constant

  

* 19.

  The equation can be transformed into $y'+\frac{t+1}ty=\frac{e^{2t}}t$

  Suppose $\mu(t)>0​$ s.t. $(\mu y)'=\mu y'+\frac{t+1}t\mu y​$.

  Thus $\mu'=\frac{t+1}t\mu$, we can let $\mu=te^t$

  Hence $(te^ty)'=e^{3t}$ which implies that $te^ty=\int e^{3t}dt=\frac13e^{3t}+c$

  Hence $y=\frac{e^{2t}+3ce^{-t}}{3t}$

  

* 20.

  Suppose $v(x)=y(x)/x$, thus $xdv+v=dy$

  It follows that the equation can be transformed into $xv'+v=v+e^v$ which is $e^{-v}dv=dx/x$

  Thus $\ln|x|+e^{-v}=c$ where $c$ is an arbitrary constant

  We get $\ln|x|+e^{\frac yx}=c$ where $c$ is an arbitrary constant

  

* 21.

  Let $u=x^2,dy/dx=(dy/du)(du/dx)=2xdy/du$

  Thus the equation can be transformed into $2dy/du=1/(uy+y^3)$ which is $(2uy+2y^3)dy-du=0$

  Let $M(y,u)=2uy+2y^3,N(y,u)=-1$

  This equation is not exact, thus suppose $\mu(y)$ s.t. $(\mu M)_u=(\mu N)_y$ which is $\mu M_u=\mu_yN+\mu N_y$

  We get $2y\mu=-\mu_y​$, thus we can let $\mu=e^{-y^2}​$

  Thus $(2uye^{-y^2}+2y^3e^{-y^2})dy-e^{-y^2}du=0$ which is exact

  $\int(2uye^{-y^2}+2y^3e^{-y^2})dy=-ue^{-y^2}-(y^2+1)e^{-y^2}+g(u)=\int(-e^{-y^2})du=-ue^{-y^2}+h(y)$

  Thus let $\phi(y,u)=-ue^{-y^2}-(y^2+1)e^{-y^2},d\phi=0​$

  Hence $-ue^{-y^2}-(y^2+1)e^{-y^2}=c$ which is $-x^2e^{-y^2}-(y^2+1)e^{-y^2}=C$ where $C$ is an arbitrary constant

  We get $x^2+y^2+1=ce^{y^2}$ where $c$ is an arbitrary constant

  

* 22.

  Suppose $xv(x)=y(x)$, thus $y'=xv'+v$

  Thus the equation can be transformed into $xv'+v=\frac{1+v}{1-v}​$ which is $xv'=\frac{1+v^2}{1-v}​$

  Hence $(\frac{1}{1+v^2}-\frac12\frac{2v}{1+v^2})dv=dx/x​$

  we get $\arctan(v)-\ln\sqrt{|1+v^2|}=\ln|x|+c$ where $c$ is an arbitrary constant

  Hence $\arctan(\frac yx)-\ln\sqrt{x^2+y^2}=c​$ where $c​$ is an arbitrary constant

  

* 23.

  Suppose $xv(x)=y(x)$, thus $y'=xv'+v$

  Thus the equation can be transformed into $xv'+v=\frac{3v^2+2v}{2v+1}$ which is $xv'=\frac{v^2+v}{2v+1}$

  Hence $(\frac1v+\frac1{1+v})dv=dx/x​$

  we get $v(v+1)=cx​$ where $c​$ is an arbitrary constant

  Hence $y^2+xy=cx^3$ where $c$ is an arbitrary constant

  

* 24.

  Suppose $v(x)=[y(x)]^{-1}$, thus $y=v^{-1},y'=-v^{-2}v'$

  Thus the equation can be transformed into $xv'-v=-e^{2x}$ which is $v'-\frac1xv=-\frac{e^{2x}}{x}$

  Multiple both sides by some $\mu(x)>0$ s.t. $(\mu v)'=\mu v'-\frac1x\mu v$ thus $\mu'=-\frac1x\mu$

  we can suppose $\mu=\frac1x$, and $(\frac {v}x)'=-\frac{e^{2x}}{x^2}$

  Hence $\frac vx=-\int\frac{e^{2x}}{x^2}dx=-\int_{1}^{x}\frac{e^{2s}}{s^2}ds+c​$

  We get $v=-x\int_{1}^{x}\frac{e^{2s}}{s^2}ds+cx$, $y^{-1}=-x\int_{1}^{x}\frac{e^{2s}}{s^2}ds+cx$

  Since $y(1)=2$, $c=\frac12$

  Hence $y^{-1}=-x\int_{0}^{x}\frac{e^{2s}}{s^2}ds+\frac2x$

  


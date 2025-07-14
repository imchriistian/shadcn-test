import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  IconCheck, 
  IconX, 
  IconAlertTriangle, 
  IconInfoCircle, 
  IconDownload, 
  IconUpload,
  IconEdit,
  IconTrash,
  IconPlus,
  IconSettings,
  IconHeart,
  IconShare,
  IconEye,
  IconDeviceFloppy,
  IconRefresh
} from "@tabler/icons-react";

export default function ColorPreview() {
  return (
    <div className="tw:p-6 tw:space-y-6">
      <div className="tw:text-center tw:mb-8">
        <h1 className="tw:text-3xl tw:font-bold tw:text-primary tw:mb-2">
          Vista previa de tu identidad de colores
        </h1>
        <p className="tw:text-muted-foreground">
          Aquí puedes ver cómo se ven tus colores de marca en diferentes componentes
        </p>
      </div>

      {/* Paleta de colores principal */}
      <Card>
        <CardHeader>
          <CardTitle>Paleta de colores principal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="tw:grid tw:grid-cols-2 tw:md:grid-cols-4 tw:gap-4">
            <div className="tw:space-y-2">
              <div className="tw:h-16 tw:bg-primary tw:rounded-lg tw:flex tw:items-center tw:justify-center">
                <span className="tw:text-primary-foreground tw:font-medium">Primary</span>
              </div>
              <p className="tw:text-sm tw:text-muted-foreground">Color principal</p>
            </div>
            
            <div className="tw:space-y-2">
              <div className="tw:h-16 tw:bg-secondary tw:rounded-lg tw:flex tw:items-center tw:justify-center">
                <span className="tw:text-secondary-foreground tw:font-medium">Secondary</span>
              </div>
              <p className="tw:text-sm tw:text-muted-foreground">Color secundario</p>
            </div>
            
            <div className="tw:space-y-2">
              <div className="tw:h-16 tw:bg-accent tw:rounded-lg tw:flex tw:items-center tw:justify-center">
                <span className="tw:text-accent-foreground tw:font-medium">Accent</span>
              </div>
              <p className="tw:text-sm tw:text-muted-foreground">Color de acento</p>
            </div>
            
            <div className="tw:space-y-2">
              <div className="tw:h-16 tw:bg-muted tw:rounded-lg tw:flex tw:items-center tw:justify-center">
                <span className="tw:text-muted-foreground tw:font-medium">Muted</span>
              </div>
              <p className="tw:text-sm tw:text-muted-foreground">Color neutro</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ejemplos de componentes */}
      <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Botones</CardTitle>
          </CardHeader>
          <CardContent className="tw:space-y-4">
            <div className="tw:space-y-2">
              <p className="tw:text-xs tw:text-muted-foreground">Botones sólidos:</p>
              <div className="tw:flex tw:flex-wrap tw:gap-2">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="info">Info</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
            
            <div className="tw:space-y-2">
              <p className="tw:text-xs tw:text-muted-foreground">Botones outline:</p>
              <div className="tw:flex tw:flex-wrap tw:gap-2">
                <Button variant="outline">Outline</Button>
                <Button variant="outline-success">Success</Button>
                <Button variant="outline-warning">Warning</Button>
                <Button variant="outline-info">Info</Button>
                <Button variant="outline-destructive">Destructive</Button>
              </div>
            </div>
            
            <div className="tw:space-y-2">
              <p className="tw:text-xs tw:text-muted-foreground">Botones ghost:</p>
              <div className="tw:flex tw:flex-wrap tw:gap-2">
                <Button variant="ghost">Ghost</Button>
                <Button variant="ghost-success">Success</Button>
                <Button variant="ghost-warning">Warning</Button>
                <Button variant="ghost-info">Info</Button>
                <Button variant="ghost-destructive">Destructive</Button>
              </div>
            </div>
            
            <div className="tw:space-y-2">
              <p className="tw:text-xs tw:text-muted-foreground">Otros estilos:</p>
              <div className="tw:flex tw:flex-wrap tw:gap-2">
                <Button variant="link">Link Button</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Botones con Iconos</CardTitle>
          </CardHeader>
          <CardContent className="tw:space-y-4">
            <div className="tw:space-y-2">
              <p className="tw:text-xs tw:text-muted-foreground">Botones con iconos principales:</p>
              <div className="tw:flex tw:flex-wrap tw:gap-2">
                <Button><IconPlus className="tw:w-4 tw:h-4" />Agregar</Button>
                <Button variant="secondary"><IconEdit className="tw:w-4 tw:h-4" />Editar</Button>
                <Button variant="destructive"><IconTrash className="tw:w-4 tw:h-4" />Eliminar</Button>
                <Button variant="success"><IconCheck className="tw:w-4 tw:h-4" />Confirmar</Button>
              </div>
            </div>
            
            <div className="tw:space-y-2">
              <p className="tw:text-xs tw:text-muted-foreground">Botones outline con iconos:</p>
              <div className="tw:flex tw:flex-wrap tw:gap-2">
                <Button variant="outline"><IconDownload className="tw:w-4 tw:h-4" />Descargar</Button>
                <Button variant="outline-success"><IconDeviceFloppy className="tw:w-4 tw:h-4" />Guardar</Button>
                <Button variant="outline-warning"><IconAlertTriangle className="tw:w-4 tw:h-4" />Advertencia</Button>
                <Button variant="outline-destructive"><IconX className="tw:w-4 tw:h-4" />Cancelar</Button>
              </div>
            </div>
            
            <div className="tw:space-y-2">
              <p className="tw:text-xs tw:text-muted-foreground">Botones ghost con iconos:</p>
              <div className="tw:flex tw:flex-wrap tw:gap-2">
                <Button variant="ghost"><IconSettings className="tw:w-4 tw:h-4" />Configurar</Button>
                <Button variant="ghost-info"><IconInfoCircle className="tw:w-4 tw:h-4" />Info</Button>
                <Button variant="ghost-success"><IconEye className="tw:w-4 tw:h-4" />Ver</Button>
                <Button variant="ghost-warning"><IconRefresh className="tw:w-4 tw:h-4" />Actualizar</Button>
              </div>
            </div>
            
            <div className="tw:space-y-2">
              <p className="tw:text-xs tw:text-muted-foreground">Botones solo icono:</p>
              <div className="tw:flex tw:flex-wrap tw:gap-2">
                <Button size="icon"><IconHeart className="tw:w-4 tw:h-4" /></Button>
                <Button size="icon" variant="outline"><IconShare className="tw:w-4 tw:h-4" /></Button>
                <Button size="icon" variant="ghost"><IconSettings className="tw:w-4 tw:h-4" /></Button>
                <Button size="icon" variant="destructive"><IconTrash className="tw:w-4 tw:h-4" /></Button>
              </div>
            </div>
            
            <div className="tw:space-y-2">
              <p className="tw:text-xs tw:text-muted-foreground">Botones con iconos al final:</p>
              <div className="tw:flex tw:flex-wrap tw:gap-2">
                <Button>Exportar <IconUpload className="tw:w-4 tw:h-4" /></Button>
                <Button variant="outline">Más opciones <IconSettings className="tw:w-4 tw:h-4" /></Button>
                <Button variant="ghost">Ver todo <IconEye className="tw:w-4 tw:h-4" /></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Estados y Badges - ahora en su propia fila */}
      <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Estados y Badges</CardTitle>
          </CardHeader>
          <CardContent className="tw:space-y-4">
            <div className="tw:space-y-2">
              <p className="tw:text-xs tw:text-muted-foreground">Badges sólidos:</p>
              <div className="tw:flex tw:flex-wrap tw:gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="destructive">Error</Badge>
              </div>
            </div>
            
            <div className="tw:space-y-2">
              <p className="tw:text-xs tw:text-muted-foreground">Badges outline:</p>
              <div className="tw:flex tw:flex-wrap tw:gap-2">
                <Badge variant="outline">Outline</Badge>
                <Badge variant="outline-success">Success</Badge>
                <Badge variant="outline-warning">Warning</Badge>
                <Badge variant="outline-info">Info</Badge>
                <Badge variant="outline-destructive">Error</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Colores del sistema */}
      <Card>
        <CardHeader>
          <CardTitle>Colores del sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="tw:grid tw:grid-cols-2 tw:md:grid-cols-4 tw:gap-4">
            <div className="tw:space-y-2">
              <div className="tw:h-12 tw:bg-destructive tw:rounded-lg tw:flex tw:items-center tw:justify-center">
                <span className="tw:text-destructive-foreground tw:font-medium tw:text-sm">Destructive</span>
              </div>
              <p className="tw:text-sm tw:text-muted-foreground">Errores</p>
            </div>
            
            <div className="tw:space-y-2">
              <div className="tw:h-12 tw:bg-success tw:rounded-lg tw:flex tw:items-center tw:justify-center">
                <span className="tw:text-success-foreground tw:font-medium tw:text-sm">Success</span>
              </div>
              <p className="tw:text-sm tw:text-muted-foreground">Éxito</p>
            </div>
            
            <div className="tw:space-y-2">
              <div className="tw:h-12 tw:bg-warning tw:rounded-lg tw:flex tw:items-center tw:justify-center">
                <span className="tw:text-warning-foreground tw:font-medium tw:text-sm">Warning</span>
              </div>
              <p className="tw:text-sm tw:text-muted-foreground">Advertencia</p>
            </div>
            
            <div className="tw:space-y-2">
              <div className="tw:h-12 tw:bg-info tw:rounded-lg tw:flex tw:items-center tw:justify-center">
                <span className="tw:text-info-foreground tw:font-medium tw:text-sm">Info</span>
              </div>
              <p className="tw:text-sm tw:text-muted-foreground">Información</p>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* Ejemplo de uso en formularios */}
      <Card>
        <CardHeader>
          <CardTitle>Ejemplo práctico: Panel de administración</CardTitle>
        </CardHeader>
        <CardContent className="tw:space-y-4">
          <div className="tw:space-y-3">
            <p className="tw:text-sm tw:text-muted-foreground">
              Ejemplo de cómo usar las diferentes variantes en un contexto real:
            </p>
            <div className="tw:space-y-3">
              <div>
                <p className="tw:text-xs tw:text-muted-foreground tw:mb-2 tw:bg-tea">Acciones principales:</p>
                <div className="tw:flex tw:flex-wrap tw:gap-2">
                  <Button variant="success">Guardar cambios</Button>
                  <Button variant="info">Ver detalles</Button>
                  <Button variant="warning">Revisar</Button>
                  <Button variant="destructive">Eliminar</Button>
                </div>
              </div>
              <div>
                <p className="tw:text-xs tw:text-muted-foreground tw:mb-2">Acciones secundarias (outline):</p>
                <div className="tw:flex tw:flex-wrap tw:gap-2">
                  <Button variant="outline">Cancelar</Button>
                  <Button variant="outline-success">Aprobar</Button>
                  <Button variant="outline-warning">Revisar después</Button>
                  <Button variant="outline-destructive">Rechazar</Button>
                </div>
              </div>
              <div>
                <p className="tw:text-xs tw:text-muted-foreground tw:mb-2">Acciones sutiles (ghost):</p>
                <div className="tw:flex tw:flex-wrap tw:gap-2">
                  <Button variant="ghost">Más opciones</Button>
                  <Button variant="ghost-info">Información</Button>
                  <Button variant="ghost-warning">Advertencia</Button>
                  <Button variant="ghost-destructive">Eliminar silenciosamente</Button>
                  <Button variant="link">Ir a configuración</Button>
                </div>
              </div>
            </div>
            <div className="tw:space-y-3">
              <div className="tw:flex tw:flex-wrap tw:gap-2 tw:items-center">
                <span className="tw:text-sm">Estados principales:</span>
                <Badge variant="success">✓ Guardado</Badge>
                <Badge variant="warning">⚠ Pendiente</Badge>
                <Badge variant="destructive">✗ Error</Badge>
                <Badge variant="info">ℹ Información</Badge>
              </div>
              <div className="tw:flex tw:flex-wrap tw:gap-2 tw:items-center">
                <span className="tw:text-sm">Estados outline:</span>
                <Badge variant="outline-success">✓ Aprobado</Badge>
                <Badge variant="outline-warning">⚠ En revisión</Badge>
                <Badge variant="outline-destructive">✗ Rechazado</Badge>
                <Badge variant="outline-info">ℹ Para revisar</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabla de todas las variantes */}
      <Card>
        <CardHeader>
          <CardTitle>Referencia completa de variantes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-3 tw:gap-4">
            <div className="tw:space-y-3">
              <h4 className="tw:font-medium tw:text-primary">Variantes principales</h4>
              <div className="tw:space-y-2">
                <div className="tw:flex tw:items-center tw:gap-3">
                  <Button size="sm">default</Button>
                  <span className="tw:text-sm tw:text-muted-foreground">Acciones primarias</span>
                </div>
                <div className="tw:flex tw:items-center tw:gap-3">
                  <Button size="sm" variant="secondary">secondary</Button>
                  <span className="tw:text-sm tw:text-muted-foreground">Acciones secundarias</span>
                </div>
                <div className="tw:flex tw:items-center tw:gap-3">
                  <Button size="sm" variant="outline">outline</Button>
                  <span className="tw:text-sm tw:text-muted-foreground">Acciones neutrales</span>
                </div>
                <div className="tw:flex tw:items-center tw:gap-3">
                  <Button size="sm" variant="ghost">ghost</Button>
                  <span className="tw:text-sm tw:text-muted-foreground">Acciones sutiles</span>
                </div>
                <div className="tw:flex tw:items-center tw:gap-3">
                  <Button size="sm" variant="link">link</Button>
                  <span className="tw:text-sm tw:text-muted-foreground">Enlaces</span>
                </div>
              </div>
            </div>
            
            <div className="tw:space-y-3">
              <h4 className="tw:font-medium tw:text-primary">Variantes de estado</h4>
              <div className="tw:space-y-2">
                <div className="tw:flex tw:items-center tw:gap-3">
                  <Button size="sm" variant="success">success</Button>
                  <span className="tw:text-sm tw:text-muted-foreground">Confirmaciones positivas</span>
                </div>
                <div className="tw:flex tw:items-center tw:gap-3">
                  <Button size="sm" variant="warning">warning</Button>
                  <span className="tw:text-sm tw:text-muted-foreground">Precauciones</span>
                </div>
                <div className="tw:flex tw:items-center tw:gap-3">
                  <Button size="sm" variant="info">info</Button>
                  <span className="tw:text-sm tw:text-muted-foreground">Información</span>
                </div>
                <div className="tw:flex tw:items-center tw:gap-3">
                  <Button size="sm" variant="destructive">destructive</Button>
                  <span className="tw:text-sm tw:text-muted-foreground">Acciones peligrosas</span>
                </div>
              </div>
            </div>
            
            <div className="tw:space-y-3">
              <h4 className="tw:font-medium tw:text-primary">Variantes combinadas</h4>
              <div className="tw:space-y-2">
                <div className="tw:space-y-1">
                  <p className="tw:text-xs tw:font-medium tw:text-muted-foreground">Outline + Estado:</p>
                  <div className="tw:flex tw:flex-wrap tw:gap-1">
                    <Button size="sm" variant="outline-success">✓</Button>
                    <Button size="sm" variant="outline-warning">⚠</Button>
                    <Button size="sm" variant="outline-info">ℹ</Button>
                    <Button size="sm" variant="outline-destructive">✗</Button>
                  </div>
                </div>
                <div className="tw:space-y-1">
                  <p className="tw:text-xs tw:font-medium tw:text-muted-foreground">Ghost + Estado:</p>
                  <div className="tw:flex tw:flex-wrap tw:gap-1">
                    <Button size="sm" variant="ghost-success">✓</Button>
                    <Button size="sm" variant="ghost-warning">⚠</Button>
                    <Button size="sm" variant="ghost-info">ℹ</Button>
                    <Button size="sm" variant="ghost-destructive">✗</Button>
                  </div>
                </div>
                <p className="tw:text-xs tw:text-muted-foreground">
                  Para estados sutiles y acciones secundarias con significado semántico
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
